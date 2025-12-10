import { motion } from 'framer-motion';
import { Briefcase, Star } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Mentorship() {
    const { mentors, loading } = useData();

    if (loading) return <div className="pt-32 text-center text-[var(--color-text-muted)]">Loading Mentors...</div>;

    return (
        <div className="pt-24 container mx-auto px-6 pb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold mb-4">Expert Mentorship</h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                    Connect with industry leaders to accelerate your professional growth.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {mentors.map((mentor, index) => (
                    <motion.div
                        key={mentor.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group"
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[var(--color-accent)] shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                            <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                        </div>

                        <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                        <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm mb-4">
                            <Briefcase size={14} />
                            <span>{mentor.role} at {mentor.company}</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {mentor.expertise.map(exp => (
                                <span key={exp} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                                    {exp}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto w-full flex items-center justify-between border-t border-white/10 pt-4">
                            <div className="flex items-center gap-1 text-yellow-400 font-medium">
                                <Star size={16} fill="currentColor" /> {mentor.rating}
                            </div>
                            <button className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
                                Book Session
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
