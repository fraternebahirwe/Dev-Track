import { Check, Trash2 } from 'lucide-react'

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.done ? 'done' : ''}`}>
      <button className="check-btn" onClick={() => onToggle(task.id)} aria-label={`Mark ${task.title} ${task.done ? 'incomplete' : 'complete'}`}>
        {task.done && <Check size={14} />}
      </button>
      <div className="task-copy">
        <strong>{task.title}</strong>
        <span>{task.category}</span>
      </div>
      <button className="icon-btn subtle" onClick={() => onDelete(task.id)} aria-label="Delete task"><Trash2 size={16} /></button>
    </div>
  )
}
