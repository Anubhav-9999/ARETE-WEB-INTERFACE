import { BookOpen, Edit3, Home, Trophy, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, label, active }) => (
    <Link
        to={to}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${active
                ? 'bg-[var(--color-accent)] text-black font-semibold shadow-[0_0_15px_var(--color-accent-glow)]'
                : 'text-[var(--color-text-muted)] hover:text-white hover:bg-white/5'
            }`}
    >
        <Icon size={18} />
        <span>{label}</span>
    </Link>
);

export default function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="glass-panel max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between">
                <Link to="/" className="text-2xl font-serif font-bold italic tracking-wider text-white">
                    Arete
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    <NavItem to="/" icon={Home} label="Home" active={isActive('/')} />
                    <NavItem to="/library" icon={BookOpen} label="Library" active={isActive('/library')} />
                    <NavItem to="/notes" icon={Edit3} label="Notes" active={isActive('/notes')} />
                    <NavItem to="/mentorship" icon={Users} label="Mentorship" active={isActive('/mentorship')} />
                </div>

                <div className="flex items-center gap-4">
                    {/* Simple Streak Badge */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <Trophy size={14} className="text-yellow-400" />
                        <span className="text-sm font-medium text-white">Day 12</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
