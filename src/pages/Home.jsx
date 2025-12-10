import { motion } from 'framer-motion';
import { Activity, ArrowRight, Book, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:opacity-[0.1] transition-opacity" />

        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-[var(--color-accent)]" size={28} />
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-[var(--color-text-muted)] leading-relaxed">{desc}</p>
    </motion.div>
);

export default function Home() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative container mx-auto px-6 py-24 text-center">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <Sparkles size={16} className="text-yellow-300" />
                    <span className="text-sm font-medium tracking-wide text-[var(--color-accent)]">V 1.0 NOW LIVE</span>
                </motion.div>

                <motion.h1
                    initial="hidden" animate="visible" variants={fadeIn}
                    className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight"
                >
                    Evolve into your <br />
                    <span className="text-gradient">Best Self</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12 font-light"
                >
                    Arete is your premier digital sanctuary for continuous learning. Read, quiz, and grow with a community of lifelong learners.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                >
                    <Link to="/library" className="btn-primary flex items-center gap-2 group text-lg">
                        Start Learning <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/mentorship" className="px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all font-medium text-lg">
                        Find a Mentor
                    </Link>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 py-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Book}
                        title="Vast Library"
                        desc="Access a curated collection of eBooks across multiple professional disciplines."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Activity}
                        title="Habit Streaks"
                        desc="Track your daily learning progress and build undeniable consistency with our streak system."
                        delay={0.4}
                    />
                    <FeatureCard
                        icon={Brain}
                        title="Digital Notes"
                        desc="Annotate whilst you read. Create and organize your key takeaways for easier review."
                        delay={0.6}
                    />
                </div>
            </section>
        </div>
    );
}
