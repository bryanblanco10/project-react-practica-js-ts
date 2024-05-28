import { type FC } from 'react'
import { dataSecondLink } from './dataSecondLink'
import { ItemLink } from './ItemLink'

export const ListSecondItemMenu: FC = () => {
  return (
    <>
      {dataSecondLink.map((item, index) => {
        return (
          <ul key={index} className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
            {item.map((el) => <ItemLink key={el.name} item={el}/>)}
          </ul>
        )
      })}
    </>
  )
}
