import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  item: {
    icon: JSX.Element
    name: string
  }
}
export const ItemMenu: FC<Props> = ({ item }) => {
  return (
    <li key={item?.name} className="pl-6 py-3 hover:bg-zinc-60">
      <Link to="/" className="flex items-center gap-5">
        {item?.icon}
        <span className="text-sm tracking-wider">{item?.name}</span>
      </Link>
    </li>
  )
}
