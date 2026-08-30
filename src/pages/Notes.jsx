import { useState } from 'react'
import { NotebookPen, Trash2 } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import { uid } from '../utils/helpers'

export default function Notes({ data, setData }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const add = (e) => { e.preventDefault(); if (!title.trim() || !body.trim()) return; setData((prev) => ({ ...prev, notes: [{ id: uid(), title: title.trim(), body: body.trim(), date: 'Just now' }, ...prev.notes] })); setTitle(''); setBody('') }
  const remove = (id) => setData((prev) => ({ ...prev, notes: prev.notes.filter((n) => n.id !== id) }))
  return <div className="page"><div className="page-title"><div><span className="eyebrow">Notes</span><h1>Learning notebook</h1><p>Capture the ideas you want your future self to remember.</p></div></div>
    <section className="panel"><form className="note-form" onSubmit={add}><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" /><textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write something useful..." rows="5" /><button className="primary-btn" type="submit"><NotebookPen size={17} /> Save note</button></form></section>
    <section className="notes-grid">{data.notes.length ? data.notes.map((note) => <article className="panel note-card" key={note.id}><div className="note-top"><div><span className="eyebrow">{note.date}</span><h2>{note.title}</h2></div><button className="icon-btn subtle" onClick={() => remove(note.id)} aria-label="Delete note"><Trash2 size={16} /></button></div><p>{note.body}</p></article>) : <EmptyState title="Your notebook is empty" text="Save your first learning note above." />}</section>
  </div>
}
