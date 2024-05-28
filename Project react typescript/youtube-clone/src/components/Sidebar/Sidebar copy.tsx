import { type FC } from 'react'
import { ListFisrtItemMenu, ListSecondItemMenu } from '..'

export const Sidebar: FC = () => {
  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-20 sidebar">
      <ListFisrtItemMenu />
      <ListSecondItemMenu />
      <span className="px-4 text-sm text-zinc-400">&copy; 2023 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
    </div>
  )
}
