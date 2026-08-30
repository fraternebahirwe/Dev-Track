export const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`

export const getCompletion = (items) => {
  if (!items.length) return 0
  return Math.round((items.filter((item) => item.done).length / items.length) * 100)
}

export const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, Number(value) || 0))
