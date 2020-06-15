
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
    name: 'Anabel',
    group: 'IT'
  },
  {
    id: 3,
    name: 'Marta',
    group: 'Producto'
  },
  {
    id: 4,
    name: 'Nico',
    group: 'Producto'
  },
  {
    id: 5,
    name: 'Rosa',
    group: 'Producto'
  }
]

export default function users(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}