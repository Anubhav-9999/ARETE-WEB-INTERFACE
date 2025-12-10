import { motion } from 'framer-motion';
import { Activity, ArrowRight, Book, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
    <motion.div
        variants={fadeIn}
        className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors"
    >
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent-glow)] flex items-center justify-center mb-4">
            <Icon className="text-[var(--color-accent)]" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[var(--color-text-muted)]">{desc}</p>
    </motion.div>
);

export default function Home() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative container mx-auto px-6 py-20 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.15] blur-[100px] rounded-full pointer-events-none" />

                <motion.h1
                    initial="hidden" animate="visible" variants={fadeIn}
                    className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                >
                    Evolve into your <br />
                    <span className="text-gradient">Best Self</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10"
                >
                    Arete is your digital sanctuary for continuous learning. Read, quiz, and grow with a community of lifelong learners.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                    className="flex justify-center gap-4"
                >
                    <Link to="/library" className="btn-primary flex items-center gap-2">
                        Start Learning <ArrowRight size={18} />
                    </Link>
                    <Link to="/mentorship" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">
                        Find a Mentor
                    </Link>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    <FeatureCard
                        icon={Book}
                        title="Vast Library"
                        desc="Access a curated collection of eBooks across multiple disciplines."
                    />
                    <FeatureCard
                        icon={Activity}
                        title="Habit Streaks"
                        desc="Track your daily learning progress and build undeniable consistency."
                    />
                    <FeatureCard
                        icon={Brain}
                        title="Digital Notes"
                        desc="Annotate whilst you read and review your key takeaways anytime."
                    />
                </motion.div>
            </section>
        </div>
    );
}
