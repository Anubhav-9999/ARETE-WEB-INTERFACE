import { createContext, useContext, useEffect, useState } from 'react';
import { mockBackend } from '../services/mockBackend';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [userStats, setUserStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initData = async () => {
            try {
                const [booksData, mentorsData, statsData] = await Promise.all([
                    mockBackend.getBooks(),
                    mockBackend.getMentors(),
                    mockBackend.getUserStats()
                ]);
                setBooks(booksData);
                setMentors(mentorsData);
                setUserStats(statsData);
            } catch (err) {
                console.error("Failed to load data", err);
            } finally {
                setLoading(false);
            }
        };
        initData();
    }, []);

    return (
        <DataContext.Provider value={{ books, mentors, userStats, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
