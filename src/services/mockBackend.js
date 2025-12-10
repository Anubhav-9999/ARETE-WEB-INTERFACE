import { books } from './data/books';
import { mentors } from './data/mentors';

// Utility to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockBackend = {
    // Books API
    async getBooks() {
        await delay(600);
        return [...books];
    },

    async getBookById(id) {
        await delay(300);
        return books.find(b => b.id === id);
    },

    // Mentors API
    async getMentors() {
        await delay(500);
        return [...mentors];
    },

    // User Notes (Persisted to LocalStorage)
    async getUserNotes() {
        await delay(400);
        const notes = localStorage.getItem('arete_notes');
        return notes ? JSON.parse(notes) : [];
    },

    async saveNote(note) {
        await delay(400);
        const notes = await this.getUserNotes();
        const newNote = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            ...note
        };
        const updatedNotes = [newNote, ...notes];
        localStorage.setItem('arete_notes', JSON.stringify(updatedNotes));
        return newNote;
    },

    // User Streaks (Persisted)
    async getUserStats() {
        await delay(300);
        const stats = localStorage.getItem('arete_stats');
        if (stats) return JSON.parse(stats);

        // Default initial stats
        const initial = {
            streak: 1,
            xp: 0,
            booksRead: 0,
            lastActive: new Date().toISOString()
        };
        localStorage.setItem('arete_stats', JSON.stringify(initial));
        return initial;
    },

    async updateUserStats(updates) {
        const current = await this.getUserStats();
        const updated = { ...current, ...updates };
        localStorage.setItem('arete_stats', JSON.stringify(updated));
        return updated;
    }
};
