import { useAppDispatch } from '@/store/hooks'
import { updateIsVisible, updateIsVisibleByScreen } from '@/store/states/layoutSlice'
import { menuIcon, youtubeIcon } from '@/utils'
import { useEffect, type FC } from 'react'
import { FiBell } from 'react-icons/fi'
import { RiVideoAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FormSearch, Loader } from '..'

export const Navbar: FC = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)')
  const dispatch = useAppDispatch()
  const handleMenu = () => {
    dispatch(updateIsVisible())
  }

  const validateMatches = (value: boolean) => {
    if (value) {
      dispatch(updateIsVisibleByScreen(true))
    } else {
      dispatch(updateIsVisibleByScreen(false))
    }
  }

  mediaQuery.addEventListener('change', (event) => {
    validateMatches(event.matches)
  })

  useEffect(() => {
    validateMatches(mediaQuery.matches)
  }, [])

  return (
    <nav className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5">
      <Loader />
      <div className="flex items-center ">
        <button className="menu-btn" onClick={handleMenu}>
          <img src={menuIcon} alt="menu-icon" />
        </button>
        <Link to="/">
          <img src={youtubeIcon} alt="youtube-logo" />
        </Link>
      </div>
      <div className="group flex items-center">
        <FormSearch />
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/male/19.jpg"
            alt=""
          />
        </div>
      </div>
    </nav>
  )
}
