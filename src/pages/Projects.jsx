import { useState } from 'react'
import { FolderPlus, Trash2 } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import { uid } from '../utils/helpers'

export default function Projects({ data, setData }) {
  const [name, setName] = useState('')
  const [tech, setTech] = useState('React')
  const [status, setStatus] = useState('In Progress')
  const [description, setDescription] = useState('')
  const addProject = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setData((prev) => ({ ...prev, projects: [{ id: uid(), name: name.trim(), tech, status, description: description.trim() || 'Personal development project.' }, ...prev.projects] }))
    setName(''); setDescription('')
  }
  const remove = (id) => setData((prev) => ({ ...prev, projects: prev.projects.filter((p) => p.id !== id) }))
  return <div className="page"><div className="page-title"><div><span className="eyebrow">Projects</span><h1>Build log</h1><p>Keep your portfolio work visible and moving forward.</p></div></div>
    <section className="panel"><form className="project-form" onSubmit={addProject}><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project name" /><input value={tech} onChange={(e) => setTech(e.target.value)} placeholder="Tech stack" /><select value={status} onChange={(e) => setStatus(e.target.value)}><option>In Progress</option><option>Completed</option><option>Planned</option></select><textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" rows="3" /><button className="primary-btn" type="submit"><FolderPlus size={17} /> Add project</button></form></section>
    <section className="panel"><div className="section-heading"><div><span className="eyebrow">Portfolio</span><h2>{data.projects.length} projects</h2></div></div>{data.projects.length ? <div className="project-grid">{data.projects.map((project) => <article className="project-card large" key={project.id}><div className="project-top"><strong>{project.name}</strong><button className="icon-btn subtle" onClick={() => remove(project.id)} aria-label="Delete project"><Trash2 size={16} /></button></div><p>{project.description}</p><div className="project-bottom"><span className="tech-tag">{project.tech}</span><span className={`status ${project.status === 'Completed' ? 'success' : project.status === 'Planned' ? 'neutral' : 'warning'}`}>{project.status}</span></div></article>)}</div> : <EmptyState title="No projects yet" text="Add your first project above." />}</section>
  </div>
}
