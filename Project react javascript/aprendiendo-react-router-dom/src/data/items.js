export const items = [
  {
    id: "0",
    name: "Lionel",
    telephone: "3007623849",
    favorite: true
  },
  {
    id: "1",
    name: "Bryan",
    telephone: "3007623849",
    favorite: false
  }
]

export const getContact = (id) => {
  return items.find(item => item.id === id)
}