
const initialState = [
  {
    id: 0,
    name: 'Roberto',
    group: 'IT'
  },
  {
    id: 1,
    name: 'Luis',
    group: 'IT'
  },
  {
    id: 2,
    name: 'Márquez',
    group: 'IT'
  }
]

export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}