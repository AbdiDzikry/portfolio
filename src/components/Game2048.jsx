import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, RotateCcw, Zap } from 'lucide-react';

const GRID_SIZE = 4;
const INITIAL_TILES = 2;

const Game2048 = () => {
    const [grid, setGrid] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => parseInt(localStorage.getItem('2048-best') || '0'));
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);
    const [moves, setMoves] = useState(0);

    // Initialize game
    const initGame = useCallback(() => {
        let newGrid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
        newGrid = addRandomTile(newGrid);
        newGrid = addRandomTile(newGrid);
        setGrid(newGrid);
        setScore(0);
        setGameOver(false);
        setWon(false);
        setMoves(0);
    }, []);

    useEffect(() => {
        initGame();
    }, [initGame]);

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
            localStorage.setItem('2048-best', score.toString());
        }
    }, [score, bestScore]);

    const addRandomTile = (currentGrid) => {
        const emptyCells = [];
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (currentGrid[r][c] === 0) emptyCells.push({ r, c });
            }
        }
        if (emptyCells.length === 0) return currentGrid;

        const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        const newGrid = currentGrid.map(row => [...row]);
        newGrid[r][c] = Math.random() < 0.9 ? 2 : 4;
        return newGrid;
    };

    const move = useCallback((direction) => {
        if (gameOver) return;

        setGrid(prevGrid => {
            let newGrid = prevGrid.map(row => [...row]);
            let moved = false;
            let currentScore = score;

            const rotate = (g) => {
                const rotated = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
                for (let r = 0; r < GRID_SIZE; r++) {
                    for (let c = 0; c < GRID_SIZE; c++) {
                        rotated[c][GRID_SIZE - 1 - r] = g[r][c];
                    }
                }
                return rotated;
            };

            // Normalize move to 'left' by rotating
            let rotations = 0;
            if (direction === 'up') rotations = 3;
            if (direction === 'right') rotations = 2;
            if (direction === 'down') rotations = 1;

            for (let i = 0; i < rotations; i++) newGrid = rotate(newGrid);

            // Move Left logic
            for (let r = 0; r < GRID_SIZE; r++) {
                let row = newGrid[r].filter(val => val !== 0);
                for (let c = 0; c < row.length - 1; c++) {
                    if (row[c] === row[c + 1]) {
                        row[c] *= 2;
                        currentScore += row[c];
                        if (row[c] === 2048) setWon(true);
                        row.splice(c + 1, 1);
                        moved = true;
                    }
                }
                while (row.length < GRID_SIZE) row.push(0);
                if (JSON.stringify(newGrid[r]) !== JSON.stringify(row)) moved = true;
                newGrid[r] = row;
            }

            // Rotate back
            for (let i = 0; i < (4 - rotations) % 4; i++) newGrid = rotate(newGrid);

            if (moved) {
                setScore(currentScore);
                newGrid = addRandomTile(newGrid);

                // Check game over
                let canMove = false;
                for (let r = 0; r < GRID_SIZE; r++) {
                    for (let c = 0; c < GRID_SIZE; c++) {
                        if (newGrid[r][c] === 0) canMove = true;
                        if (c < GRID_SIZE - 1 && newGrid[r][c] === newGrid[r][c + 1]) canMove = true;
                        if (r < GRID_SIZE - 1 && newGrid[r][c] === newGrid[r + 1][c]) canMove = true;
                    }
                }
                if (!canMove) setGameOver(true);
                setMoves(prev => prev + 1);
                return newGrid;
            }
            return prevGrid;
        });
    }, [gameOver, score]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
            if (['ArrowUp', 'w', 'W'].includes(e.key)) move('up');
            if (['ArrowDown', 's', 'S'].includes(e.key)) move('down');
            if (['ArrowLeft', 'a', 'A'].includes(e.key)) move('left');
            if (['ArrowRight', 'd', 'D'].includes(e.key)) move('right');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [move]);

    const getTileColor = (value) => {
        const colors = {
            2: 'bg-white/10 text-text-primary border-white/20',
            4: 'bg-white/15 text-text-primary border-white/25',
            8: 'bg-accent-green/20 text-accent-green border-accent-green/30 shadow-[0_0_10px_rgba(var(--accent-green-rgb),0.2)]',
            16: 'bg-accent-green/30 text-accent-green border-accent-green/40 shadow-[0_0_15px_rgba(var(--accent-green-rgb),0.3)]',
            32: 'bg-accent-green/40 text-accent-green border-accent-green/50 shadow-[0_0_20px_rgba(var(--accent-green-rgb),0.4)]',
            64: 'bg-amber-500/30 text-amber-500 border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.3)]',
            128: 'bg-amber-500/40 text-amber-500 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.4)]',
            256: 'bg-pink-500/30 text-pink-500 border-pink-500/40 shadow-[0_0_35px_rgba(236,72,153,0.3)]',
            512: 'bg-pink-500/40 text-pink-500 border-pink-500/50 shadow-[0_0_40px_rgba(236,72,153,0.4)]',
            1024: 'bg-blue-500/30 text-blue-500 border-blue-500/40 shadow-[0_0_45px_rgba(59,130,246,0.3)]',
            2048: 'bg-accent-green/60 text-white border-accent-green shadow-[0_0_50px_rgba(var(--accent-green-rgb),0.6)] animate-pulse',
        };
        return colors[value] || 'bg-zinc-800 text-white';
    };

    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto py-12">
            {/* Game Header */}
            <div className="flex justify-between items-center w-full px-6 py-4 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">Score</span>
                    <span className="text-2xl font-display font-bold text-accent-green">{score}</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">Best</span>
                        <div className="flex items-center gap-2">
                            <Trophy size={14} className="text-amber-500" />
                            <span className="text-lg font-bold">{bestScore}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">Moves</span>
                        <span className="text-lg font-bold">{moves}</span>
                    </div>
                    <button
                        onClick={initGame}
                        className="p-3 bg-white/10 dark:bg-white/5 rounded-xl hover:bg-white/20 transition-all hover:scale-110 active:scale-95 text-text-primary/80"
                        title="Restart"
                    >
                        <RotateCcw size={20} />
                    </button>
                </div>
            </div>

            {/* Game Board */}
            <div className="relative p-3 bg-white/5 dark:bg-black/20 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden aspect-square w-full max-w-sm">
                <div className="grid grid-cols-4 gap-3 h-full w-full">
                    {grid.map((row, r) =>
                        row.map((val, c) => (
                            <div key={`${r}-${c}`} className="relative h-full w-full bg-white/5 dark:bg-white/2 rounded-xl border border-white/5" />
                        ))
                    )}
                </div>

                {/* Actual Tiles */}
                <div className="absolute inset-3 grid grid-cols-4 gap-3">
                    {grid.map((row, r) =>
                        row.map((val, c) => (
                            <AnimatePresence key={`${r}-${c}-tile`}>
                                {val !== 0 && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className={`absolute flex items-center justify-center font-display font-bold text-xl md:text-2xl rounded-xl border transition-colors duration-300 ${getTileColor(val)}`}
                                        style={{
                                            width: 'calc(25% - 9px)',
                                            height: 'calc(25% - 9px)',
                                            top: `${r * 25}%`,
                                            left: `${c * 25}%`,
                                        }}
                                    >
                                        {val}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        ))
                    )}
                </div>

                {/* Overlays */}
                <AnimatePresence>
                    {(gameOver || won) && (
                        <motion.div
                            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
                            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 rounded-[2rem] text-center p-6"
                        >
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="bg-white/10 border border-white/20 p-8 rounded-3xl backdrop-blur-xl shadow-2xl"
                            >
                                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/20 text-accent-green">
                                    <Zap size={32} />
                                </div>
                                <h2 className="text-3xl font-display font-bold mb-2 text-white">
                                    {won ? 'You Won!' : 'Game Over'}
                                </h2>
                                <p className="text-white/60 mb-6 font-mono text-sm uppercase tracking-widest">
                                    Final Score: {score}
                                </p>
                                <button
                                    onClick={initGame}
                                    className="px-8 py-3 bg-accent-green text-white font-bold rounded-xl hover:bg-accent-green/80 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--accent-green-rgb),0.3)]"
                                >
                                    Play Again
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Instructions */}
            <div className="p-6 bg-white/5 dark:bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl w-full text-center">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-accent-green mb-3">How to Play</h4>
                <p className="text-xs text-text-secondary leading-relaxed font-mono">
                    Use <span className="text-text-primary px-1 border border-white/20 rounded">ARROW KEYS</span> or <span className="text-text-primary px-1 border border-white/20 rounded">WASD</span> to slide tiles.
                    When two tiles with the same number touch, they <span className="text-accent-green font-bold">MERGE</span> into one!
                </p>
            </div>
        </div>
    );
};

export default Game2048;
