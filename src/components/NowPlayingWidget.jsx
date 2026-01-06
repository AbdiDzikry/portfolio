import { useState, useEffect } from 'react';
import { Music, Github, ExternalLink, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NowPlayingWidget = ({ username = 'testis3131' }) => {
    const [track, setTrack] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const apiKey = import.meta.env.VITE_LASTFM_API_KEY || 'demo'; // Will use demo mode if no key
                const response = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
                );

                if (!response.ok) {
                    throw new Error(`Last.fm API error: ${response.status}`);
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.message);
                }

                if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
                    const latestTrack = data.recenttracks.track[0];
                    setTrack({
                        name: latestTrack.name,
                        artist: latestTrack.artist['#text'] || latestTrack.artist,
                        album: latestTrack.album['#text'],
                        image: latestTrack.image[2]['#text'], // Medium size
                        url: latestTrack.url,
                        isPlaying: latestTrack['@attr']?.nowplaying === 'true'
                    });
                } else {
                    setTrack(null);
                }
                setLoading(false);
            } catch (err) {
                console.error('Last.fm fetch error:', err);
                setError('Unable to load music data');
                setLoading(false);
            }
        };

        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 30000); // Update every 30s
        return () => clearInterval(interval);
    }, [username]);

    if (loading) {
        return (
            <div className="bg-gradient-to-br from-white/50 via-white/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-bg-secondary rounded-lg animate-pulse" />
                    <div className="flex-1 space-y-2">
                        <div className="h-3 bg-bg-secondary rounded w-3/4 animate-pulse" />
                        <div className="h-2 bg-bg-secondary rounded w-1/2 animate-pulse" />
                    </div>
                </div>
            </div>
        );
    }

    if (error || !track) {
        return (
            <div className="bg-gradient-to-br from-white/50 via-white/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 p-4 shadow-lg">
                <div className="flex items-center gap-3 text-text-muted">
                    <Music size={20} className="opacity-50" />
                    <span className="text-xs">No recent tracks</span>
                </div>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="block bg-gradient-to-br from-white/50 via-white/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 p-4 shadow-lg hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 group"
            >
                <div className="flex items-center gap-3">
                    {track.image ? (
                        <img
                            src={track.image}
                            alt={track.album}
                            className="w-12 h-12 rounded-lg object-cover shadow-md"
                        />
                    ) : (
                        <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center">
                            <Music size={20} className="text-accent-green" />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            {track.isPlaying && (
                                <span className="flex items-center gap-1 text-[10px] text-accent-green font-bold">
                                    <Activity size={10} className="animate-pulse" />
                                    NOW PLAYING
                                </span>
                            )}
                        </div>
                        <p className="text-sm font-bold text-text-primary truncate group-hover:text-accent-green transition-colors">
                            {track.name}
                        </p>
                        <p className="text-xs text-text-muted truncate">
                            {track.artist}
                        </p>
                    </div>
                    <ExternalLink size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </motion.a>
        </AnimatePresence>
    );
};

export default NowPlayingWidget;
