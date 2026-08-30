import { Menu, Moon, Search, Sun } from 'lucide-react'

export default function Topbar({ dark, setDark, onMenu, query, setQuery }) {
  return (
    <header className="topbar">
      <button className="icon-btn menu-btn" onClick={onMenu} aria-label="Open menu"><Menu size={20} /></button>
      <div className="search-wrap">
        <Search size={18} />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tasks, projects, notes..." />
        <kbd>⌘ K</kbd>
      </div>
      <button className="icon-btn" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
        {dark ? <Sun size={19} /> : <Moon size={19} />}
      </button>
      <div className="avatar">F</div>
    </header>
  )
}
