import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import TaskItem from '../components/TaskItem'
import ProgressBar from '../components/ProgressBar'
import { getCompletion, uid } from '../utils/helpers'

export default function Learning({ data, setData }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('JavaScript')
  const [filter, setFilter] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(data.tasks.map((t) => t.category))], [data.tasks])
  const visible = data.tasks.filter((t) => filter === 'All' || t.category === filter)
  const addTask = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    setData((prev) => ({ ...prev, tasks: [{ id: uid(), title: title.trim(), done: false, category }, ...prev.tasks] }))
    setTitle('')
  }
  const toggle = (id) => setData((prev) => ({ ...prev, tasks: prev.tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t) }))
  const remove = (id) => setData((prev) => ({ ...prev, tasks: prev.tasks.filter((t) => t.id !== id) }))
  const completion = getCompletion(data.tasks)
  return <div className="page"><div className="page-title"><div><span className="eyebrow">Learning</span><h1>Your learning queue</h1><p>Add focused work, complete it, and watch your consistency grow.</p></div></div>
    <section className="panel add-panel"><form className="inline-form" onSubmit={addTask}><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What do you want to learn?" /><select value={category} onChange={(e) => setCategory(e.target.value)}><option>JavaScript</option><option>React</option><option>SQL</option><option>Git</option><option>CSS</option></select><button className="primary-btn" type="submit"><Plus size={17} /> Add task</button></form></section>
    <div className="learning-top"><section className="panel progress-panel"><div className="section-heading"><div><span className="eyebrow">Weekly progress</span><h2>{completion}% complete</h2></div><strong>{data.tasks.filter((t) => t.done).length}/{data.tasks.length}</strong></div><ProgressBar value={completion} /><p>Finish the remaining tasks before the week ends.</p></section>
    <section className="panel"><div className="section-heading"><div><span className="eyebrow">Filter</span><h2>Topics</h2></div></div><div className="filter-row">{categories.map((c) => <button key={c} className={`filter-btn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>)}</div></section></div>
    <section className="panel"><div className="section-heading"><div><span className="eyebrow">Task list</span><h2>{visible.length} tasks</h2></div></div>{visible.length ? <div className="task-list">{visible.map((task) => <TaskItem key={task.id} task={task} onToggle={toggle} onDelete={remove} />)}</div> : <EmptyState title="No tasks found" text="Add a task or switch your topic filter." />}</section>
  </div>
}
