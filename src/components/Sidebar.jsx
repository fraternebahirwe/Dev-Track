import { BarChart3, BookOpen, FolderKanban, LayoutDashboard, NotebookPen, Settings2, X } from 'lucide-react'

const items = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'learning', label: 'Learning', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'skills', label: 'Skills', icon: BarChart3 },
  { id: 'notes', label: 'Notes', icon: NotebookPen },
  { id: 'settings', label: 'Settings', icon: Settings2 },
]

export default function Sidebar({ page, setPage, open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="sidebar-top">
        <div className="brand">
          <div className="brand-mark">D</div>
          <div>
            <strong>DevTrack</strong>
            <span>Developer progress</span>
          </div>
        </div>
        <button className="icon-btn mobile-close" onClick={onClose} aria-label="Close menu"><X size={19} /></button>
      </div>
      <nav className="nav-list">
        {items.map(({ id, label, icon: Icon }) => (
          <button key={id} className={`nav-item ${page === id ? 'active' : ''}`} onClick={() => { setPage(id); onClose() }}>
            <Icon size={19} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-tip">
        <span>Focus</span>
        <strong>Build something every week.</strong>
        <small>Small, consistent progress compounds.</small>
      </div>
    </aside>
  )
}
