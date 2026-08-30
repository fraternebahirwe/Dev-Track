import { CheckCircle2, Flame, ListChecks, Target } from 'lucide-react'
import ProgressBar from '../components/ProgressBar'
import StatCard from '../components/StatCard'
import TaskItem from '../components/TaskItem'
import { getCompletion } from '../utils/helpers'

export default function Dashboard({ data, handlers, setPage }) {
  const completion = getCompletion(data.tasks)
  const completed = data.tasks.filter((t) => t.done).length
  return (
    <div className="page">
      <section className="hero-row">
        <div><span className="eyebrow">Sunday, August 30, 2026</span><h1>Good evening, {data.profile.name} 👋</h1><p>Keep building. Keep learning. Your progress is already adding up.</p></div>
        <button className="primary-btn" onClick={() => setPage('learning')}>+ Add learning task</button>
      </section>
      <div className="stats-grid">
        <StatCard icon={ListChecks} label="Tasks completed" value={`${completed}/${data.tasks.length}`} helper="Your current task list" />
        <StatCard icon={Target} label="Overall progress" value={`${completion}%`} helper="Completed tasks / total" />
        <StatCard icon={Flame} label="Learning streak" value="7 days" helper="Consistency beats intensity" />
        <StatCard icon={CheckCircle2} label="Projects shipped" value="2" helper="Keep publishing your work" />
      </div>
      <div className="dashboard-grid">
        <section className="panel focus-panel">
          <div className="section-heading"><div><span className="eyebrow">Current focus</span><h2>{data.profile.focus}</h2></div><span className="pill">This week</span></div>
          <p>Build stronger fundamentals through short practice sessions and one small project.</p>
          <div className="focus-number"><strong>{completion}%</strong><span>weekly completion</span></div>
          <ProgressBar value={completion} />
          <div className="mini-metrics"><span><strong>{data.tasks.length}</strong> tasks</span><span><strong>{completed}</strong> done</span><span><strong>{data.tasks.length - completed}</strong> remaining</span></div>
        </section>
        <section className="panel">
          <div className="section-heading"><div><span className="eyebrow">Today</span><h2>Learning tasks</h2></div><button className="text-btn" onClick={() => setPage('learning')}>View all</button></div>
          <div className="task-list">{data.tasks.slice(0, 4).map((task) => <TaskItem key={task.id} task={task} {...handlers} />)}</div>
        </section>
      </div>
      <section className="panel">
        <div className="section-heading"><div><span className="eyebrow">Recent work</span><h2>Projects</h2></div><button className="text-btn" onClick={() => setPage('projects')}>Manage projects</button></div>
        <div className="project-grid">{data.projects.map((project) => <div className="project-card" key={project.id}><div className="project-top"><strong>{project.name}</strong><span className={`status ${project.status === 'Completed' ? 'success' : 'warning'}`}>{project.status}</span></div><p>{project.description}</p><span className="tech-tag">{project.tech}</span></div>)}</div>
      </section>
    </div>
  )
}
