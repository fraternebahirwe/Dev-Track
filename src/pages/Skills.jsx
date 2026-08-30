import { useState } from 'react'
import { Plus } from 'lucide-react'
import ProgressBar from '../components/ProgressBar'
import { clamp, uid } from '../utils/helpers'

export default function Skills({ data, setData }) {
  const [name, setName] = useState('')
  const [level, setLevel] = useState(50)
  const add = (e) => { e.preventDefault(); if (!name.trim()) return; setData((prev) => ({ ...prev, skills: [...prev.skills, { id: uid(), name: name.trim(), level: clamp(level) }] })); setName(''); setLevel(50) }
  const update = (id, value) => setData((prev) => ({ ...prev, skills: prev.skills.map((s) => s.id === id ? { ...s, level: clamp(value) } : s) }))
  return <div className="page"><div className="page-title"><div><span className="eyebrow">Skills</span><h1>Skill tracker</h1><p>Use your own percentage as a learning signal, not a final judgment.</p></div></div>
    <section className="panel"><form className="inline-form skills-form" onSubmit={add}><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Skill name" /><input type="number" min="0" max="100" value={level} onChange={(e) => setLevel(e.target.value)} /><button className="primary-btn" type="submit"><Plus size={17} /> Add skill</button></form></section>
    <section className="skills-grid">{data.skills.map((skill) => <article className="panel skill-card" key={skill.id}><div className="skill-head"><div><strong>{skill.name}</strong><span>Current confidence</span></div><strong>{skill.level}%</strong></div><ProgressBar value={skill.level} /><input className="range" type="range" min="0" max="100" value={skill.level} onChange={(e) => update(skill.id, e.target.value)} /><div className="range-labels"><span>Beginner</span><span>Independent</span><span>Advanced</span></div></article>)}</section>
  </div>
}
