export const defaultData = {
  profile: {
    name: 'Developer',
    focus: 'JavaScript',
  },
  tasks: [
    { id: 1, title: 'Review JavaScript array methods', done: true, category: 'JavaScript' },
    { id: 2, title: 'Practice map() and filter()', done: true, category: 'JavaScript' },
    { id: 3, title: 'Build a small React component', done: false, category: 'React' },
    { id: 4, title: 'Solve 2 SQL exercises', done: false, category: 'SQL' },
    { id: 5, title: 'Write notes about JOINs', done: false, category: 'SQL' },
  ],
  skills: [
    { id: 1, name: 'HTML & CSS', level: 82 },
    { id: 2, name: 'JavaScript', level: 58 },
    { id: 3, name: 'React', level: 44 },
    { id: 4, name: 'Git & GitHub', level: 63 },
    { id: 5, name: 'SQL', level: 38 },
  ],
  projects: [
    { id: 1, name: 'MoneyWise', tech: 'React', status: 'Completed', description: 'Personal finance dashboard.' },
    { id: 2, name: 'Learning Sprint Planner', tech: 'HTML · CSS · JS', status: 'Completed', description: 'Weekly learning planner with localStorage.' },
    { id: 3, name: 'DevPulse', tech: 'React', status: 'In Progress', description: 'Developer project tracking app.' },
  ],
  notes: [
    { id: 1, title: 'SQL JOINs', body: 'INNER JOIN returns matching rows. LEFT JOIN keeps every row from the left table.', date: 'Today' },
    { id: 2, title: 'React hooks', body: 'useState stores component state. useEffect handles side effects.', date: 'Yesterday' },
  ],
}
