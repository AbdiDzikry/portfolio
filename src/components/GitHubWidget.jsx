import { useState, useEffect } from 'react';
import { Github, GitCommit, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GitHubWidget = ({ username = 'AbdiDzikry' }) => {
    const [stats, setStats] = useState(null);
    const [recentActivity, setRecentActivity] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user stats
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) throw new Error('User not found');
                const userData = await userResponse.json();

                // Fetch recent events
                const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`);
                if (!eventsResponse.ok) throw new Error('Events not found');
                const eventsData = await eventsResponse.json();

                setStats({
                    repos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                    avatar: userData.avatar_url,
                    bio: userData.bio,
                    url: userData.html_url
                });

                // Get latest push event
                if (Array.isArray(eventsData)) {
                    const latestPush = eventsData.find(event => event.type === 'PushEvent');
                    if (latestPush) {
                        setRecentActivity({
                            repo: latestPush.repo.name,
                            message: latestPush.payload.commits?.[0]?.message || 'Recent commit',
                            time: new Date(latestPush.created_at),
                            url: `https://github.com/${latestPush.repo.name}`
                        });
                    }
                }

                setLoading(false);
            } catch (err) {
                console.error('GitHub fetch error:', err);
                setStats(null); // Ensure stats is null on error so fallback UI shows
                setLoading(false);
            }
        };

        fetchGitHubData();
        const interval = setInterval(fetchGitHubData, 300000); // Update every 5 min
        return () => clearInterval(interval);
    }, [username]);

    if (loading) {
        return (
            <div className="bg-gradient-to-br from-white/50 via-white/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 p-4 shadow-lg">
                <div className="space-y-3">
                    <div className="h-4 bg-bg-secondary rounded w-1/2 animate-pulse" />
                    <div className="h-3 bg-bg-secondary rounded w-3/4 animate-pulse" />
                </div>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="bg-gradient-to-br from-white/50 via-white/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 p-4 shadow-lg">
                <div className="flex items-center gap-3 text-text-muted">
                    <Github size={20} className="opacity-50" />
                    <span className="text-xs">Unable to load GitHub data</span>
                </div>
            </div>
        );
    }

    const getTimeAgo = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
            }
        }
        return 'just now';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-white/50 via-white/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/20 dark:to-transparent backdrop-blur-xl rounded-2xl border border-white/60 dark:border-white/10 p-4 shadow-lg hover:shadow-xl hover:border-accent-green/40 transition-all duration-300"
        >
            <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Github size={18} className="text-accent-green" />
                        <span className="text-xs font-bold text-text-primary">GitHub Activity</span>
                    </div>
                    <a
                        href={stats.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent-green transition-colors"
                    >
                        <ExternalLink size={14} />
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/30 dark:bg-black/20 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-text-primary">{stats.repos}</div>
                        <div className="text-[10px] text-text-muted">Repos</div>
                    </div>
                    <div className="bg-white/30 dark:bg-black/20 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-text-primary">{stats.followers}</div>
                        <div className="text-[10px] text-text-muted">Followers</div>
                    </div>
                    <div className="bg-white/30 dark:bg-black/20 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-text-primary">{stats.following}</div>
                        <div className="text-[10px] text-text-muted">Following</div>
                    </div>
                </div>

                {/* Recent Activity */}
                {recentActivity && (
                    <a
                        href={recentActivity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white/30 dark:bg-black/20 rounded-lg p-3 hover:bg-white/50 dark:hover:bg-black/30 transition-colors group"
                    >
                        <div className="flex items-start gap-2">
                            <GitCommit size={14} className="text-accent-green mt-0.5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-text-primary truncate group-hover:text-accent-green transition-colors">
                                    {recentActivity.repo}
                                </p>
                                <p className="text-[10px] text-text-muted truncate mt-0.5">
                                    {recentActivity.message}
                                </p>
                                <p className="text-[9px] text-text-muted/70 mt-1">
                                    {getTimeAgo(recentActivity.time)}
                                </p>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default GitHubWidget;
