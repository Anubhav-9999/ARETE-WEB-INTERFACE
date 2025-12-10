import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Plus, Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import { mockBackend } from '../services/mockBackend';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [newNote, setNewNote] = useState({ title: '', content: '' });

    useEffect(() => {
        mockBackend.getUserNotes().then(setNotes);
    }, []);

    const handleSave = async () => {
        if (!newNote.title || !newNote.content) return;
        const saved = await mockBackend.saveNote(newNote);
        setNotes([saved, ...notes]);
        setIsCreating(false);
        setNewNote({ title: '', content: '' });
    };

    return (
        <div className="pt-24 container mx-auto px-6 pb-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-serif font-bold">My Notes</h2>
                <button
                    onClick={() => setIsCreating(true)}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} /> New Note
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <AnimatePresence>
                    {isCreating && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="glass-panel p-6 rounded-2xl border-l-4 border-[var(--color-accent)]"
                        >
                            <input
                                type="text"
                                placeholder="Note Title"
                                className="w-full bg-transparent text-xl font-bold mb-4 outline-none placeholder:text-white/20"
                                value={newNote.title}
                                onChange={e => setNewNote({ ...newNote, title: e.target.value })}
                            />
                            <textarea
                                placeholder="Write your thoughts..."
                                className="w-full bg-transparent h-32 resize-none outline-none text-[var(--color-text-muted)] placeholder:text-white/20 mb-4"
                                value={newNote.content}
                                onChange={e => setNewNote({ ...newNote, content: e.target.value })}
                            />
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setIsCreating(false)}
                                    className="px-4 py-2 rounded-lg hover:bg-white/5 text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-black font-semibold text-sm flex items-center gap-2"
                                >
                                    <Save size={14} /> Save
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {notes.map((note) => (
                        <motion.div
                            layout
                            key={note.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-semibold">{note.title}</h3>
                                <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                                    <Clock size={12} /> {new Date(note.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-[var(--color-text-muted)] line-clamp-3">{note.content}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {notes.length === 0 && !isCreating && (
                <div className="text-center py-20 opacity-50">
                    <p>No notes yet. Start writing to evolve your mind.</p>
                </div>
            )}
        </div>
    );
}
