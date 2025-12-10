import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

export default function Library() {
    const { books, loading } = useData();

    if (loading) return <div className="pt-32 text-center text-[var(--color-text-muted)]">Loading Library...</div>;

    return (
        <div className="pt-24 container mx-auto px-6 pb-20">
            <h2 className="text-3xl font-serif font-bold mb-8">Library</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {books.map((book, index) => (
                    <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative cursor-pointer"
                    >
                        <div className="aspect-[2/3] rounded-xl overflow-hidden mb-4 shadow-xl group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-shadow duration-300">
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="btn-primary scale-90">Read Now</span>
                            </div>
                        </div>
                        <h3 className="font-semibold text-lg leading-tight mb-1">{book.title}</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">{book.author}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
