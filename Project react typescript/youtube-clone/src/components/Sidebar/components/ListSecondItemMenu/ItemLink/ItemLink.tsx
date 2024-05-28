import { type FC } from 'react'

interface Props {
  item: {
    name: string
  }
}
export const ItemLink: FC<Props> = ({ item }) => {
  return <li>{item?.name}</li>
}
