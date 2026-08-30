export default function ProgressBar({ value, compact = false }) {
  return <div className={`progress ${compact ? 'compact' : ''}`}><span style={{ width: `${value}%` }} /></div>
}
