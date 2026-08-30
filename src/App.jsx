import { useEffect, useMemo, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Learning from './pages/Learning'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Notes from './pages/Notes'
import Settings from './pages/Settings'
import { defaultData } from './data/defaultData'
import { useLocalStorage } from './hooks/useLocalStorage'

const pages = { dashboard: Dashboard, learning: Learning, projects: Projects, skills: Skills, notes: Notes, settings: Settings }

export default function App() {
  const [data, setData] = useLocalStorage('devtrack-data', defaultData)
  const [page, setPage] = useState('dashboard')
  const [dark, setDark] = useLocalStorage('devtrack-theme', true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [query, setQuery] = useState('')
  const Page = pages[page]

  useEffect(() => {
    document.body.classList.toggle('light', !dark)
  }, [dark])

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        document.querySelector('.search-wrap input')?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const searchedData = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return data
    return {
      ...data,
      tasks: data.tasks.filter((t) => `${t.title} ${t.category}`.toLowerCase().includes(q)),
      projects: data.projects.filter((p) => `${p.name} ${p.tech} ${p.description}`.toLowerCase().includes(q)),
      notes: data.notes.filter((n) => `${n.title} ${n.body}`.toLowerCase().includes(q)),
      skills: data.skills.filter((s) => s.name.toLowerCase().includes(q)),
    }
  }, [data, query])

  const taskHandlers = {
    onToggle: (id) => setData((prev) => ({ ...prev, tasks: prev.tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t) })),
    onDelete: (id) => setData((prev) => ({ ...prev, tasks: prev.tasks.filter((t) => t.id !== id) })),
  }

  return <div className="app-shell"><Sidebar page={page} setPage={setPage} open={sidebarOpen} onClose={() => setSidebarOpen(false)} /><div className="main-shell"><Topbar dark={dark} setDark={setDark} onMenu={() => setSidebarOpen(true)} query={query} setQuery={setQuery} /><main><Page data={searchedData} setData={setData} handlers={taskHandlers} setPage={setPage} dark={dark} setDark={setDark} /></main><footer>DevTrack · Build. Learn. Ship.</footer></div>{sidebarOpen && <button className="overlay" onClick={() => setSidebarOpen(false)} aria-label="Close navigation" />}</div>
}
