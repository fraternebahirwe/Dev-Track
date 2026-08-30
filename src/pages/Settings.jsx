export default function Settings({ data, setData, dark, setDark }) {
  const updateName = (e) => setData((prev) => ({ ...prev, profile: { ...prev.profile, name: e.target.value } }))
  const updateFocus = (e) => setData((prev) => ({ ...prev, profile: { ...prev.profile, focus: e.target.value } }))
  const reset = () => { localStorage.removeItem('devtrack-data'); window.location.reload() }
  return <div className="page"><div className="page-title"><div><span className="eyebrow">Settings</span><h1>Personalize DevTrack</h1><p>Everything is stored locally in your browser.</p></div></div>
    <section className="panel settings-card"><div className="setting-row"><div><strong>Display name</strong><span>Used across the dashboard.</span></div><input value={data.profile.name} onChange={updateName} /></div>
      <div className="setting-row"><div><strong>Current focus</strong><span>The main skill you are pushing this week.</span></div><input value={data.profile.focus} onChange={updateFocus} /></div>
      <div className="setting-row"><div><strong>Theme</strong><span>Switch between dark and light mode.</span></div><button className="secondary-btn" onClick={() => setDark((v) => !v)}>{dark ? 'Use light mode' : 'Use dark mode'}</button></div>
      <div className="setting-row danger-row"><div><strong>Reset local data</strong><span>Restore the original demo content.</span></div><button className="danger-btn" onClick={reset}>Reset demo</button></div>
    </section>
  </div>
}
