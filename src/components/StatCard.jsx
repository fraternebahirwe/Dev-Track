import { ArrowUpRight } from 'lucide-react'

export default function StatCard({ label, value, helper, icon: Icon }) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <div className="stat-icon"><Icon size={18} /></div>
        <ArrowUpRight size={16} className="muted" />
      </div>
      <strong className="stat-value">{value}</strong>
      <span className="stat-label">{label}</span>
      <small>{helper}</small>
    </article>
  )
}
