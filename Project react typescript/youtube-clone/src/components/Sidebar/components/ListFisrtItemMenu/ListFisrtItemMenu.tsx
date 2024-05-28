import { type FC } from 'react'
import { dataFisrtLink } from './dataFisrtLink'
import { ItemMenu } from './components/ItemMenu'

export const ListFisrtItemMenu: FC = () => {
  return (
    <>
      {dataFisrtLink.map((item, index) => {
        return (
          <ul key={index} className="flex flex-col border-b-2 border-gray-700">
            {item?.list.map((el) => <ItemMenu key={el.name} item={el} />)}
          </ul>
        )
      })}
    </>
  )
}
