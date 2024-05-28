import { layoutSelector } from '@/store/selectors'
import { historyIcon, homeIcon, libraryIcon, likedIcon, shortsIcon, subcriptionIcon, videosIcon, watchLaterIcon } from '@/utils'
import { type FC } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
export const Sidebar: FC = () => {
  const isVisible = useSelector(layoutSelector, shallowEqual)
  return (
    <>
      <aside
        className="sidebar lg:w-20 w-16"
        style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <div className="sidebar-items">
          <div className="item ">
            <img src={homeIcon} alt="" />
            <span className='lg:text-[11px] text-[10px]'>Home</span>
          </div>
          <div className="item ">
            <img src={shortsIcon} alt="home" />
            <span className='lg:text-[11px] text-[10px]'>Shorts</span>
          </div>
          <div className="item ">
            <img src={subcriptionIcon} alt="home" />
            <span className='lg:text-[11px] text-[10px]'>Subscriptions</span>
          </div>
          <div className="item ">
            <img src={libraryIcon} alt="home" />
            <span className='lg:text-[11px] text-[10px]'>Library</span>
          </div>
        </div>
      </aside>

      <div
        id="menu"
        className="md:block w-[240px] overflow-y-auto h-full py-4 bg-[#0f0f0f] absolute md:relative z-10"
        style={{ display: isVisible ? 'none' : 'flex' }}
      >
        <div className="flex px-5 flex-col">
          <div className="menu-group">
            <div className="menu-item">
              <img src={homeIcon} alt="" />
              <span>Home</span>
            </div>
            <div className="menu-item">
              <img src={shortsIcon} alt="" />
              <span>Shorts</span>
            </div>
            <div className="menu-item">
              <img src={subcriptionIcon} alt="" />
              <span>Subscriptions</span>
            </div>
          </div>

          <div className="menu-group">
            <div className="menu-item">
              <img src={libraryIcon} alt="" />
              <span>Library</span>
            </div>
            <div className="menu-item">
              <img src={historyIcon} alt="" />
              <span>History</span>
            </div>
            <div className="menu-item">
              <img src={videosIcon} alt="" />
              <span>Your Videos</span>
            </div>
            <div className="menu-item">
              <img src={watchLaterIcon} alt="" />
              <span>Watch Later</span>
            </div>
            <div className="menu-item">
              <img src={likedIcon} alt="" />
              <span>Liked Videos</span>
            </div>
          </div>
          <div className="menu-group">
            <div className="menu-item">
              <img src={homeIcon} alt="" />
              <span>Home</span>
            </div>
            <div className="menu-item">
              <img src={shortsIcon} alt="" />
              <span>Shorts</span>
            </div>
            <div className="menu-item">
              <img src={subcriptionIcon} alt="" />
              <span>Subscriptions</span>
            </div>
          </div>

          <div className="menu-group">
            <div className="menu-item">
              <img src={libraryIcon} alt="" />
              <span>Library</span>
            </div>
            <div className="menu-item">
              <img src={historyIcon} alt="" />
              <span>History</span>
            </div>
            <div className="menu-item">
              <img src={videosIcon} alt="" />
              <span>Your Videos</span>
            </div>
            <div className="menu-item">
              <img src={watchLaterIcon} alt="" />
              <span>Watch Later</span>
            </div>
            <div className="menu-item">
              <img src={likedIcon} alt="" />
              <span>Liked Videos</span>
            </div>
          </div>
          <div className="menu-group">
            <div className="menu-item">
              <img src={homeIcon} alt="" />
              <span>Home</span>
            </div>
            <div className="menu-item">
              <img src={shortsIcon} alt="" />
              <span>Shorts</span>
            </div>
            <div className="menu-item">
              <img src={subcriptionIcon} alt="" />
              <span>Subscriptions</span>
            </div>
          </div>

          <div className="menu-group">
            <div className="menu-item">
              <img src={libraryIcon} alt="" />
              <span>Library</span>
            </div>
            <div className="menu-item">
              <img src={historyIcon} alt="" />
              <span>History</span>
            </div>
            <div className="menu-item">
              <img src={videosIcon} alt="" />
              <span>Your Videos</span>
            </div>
            <div className="menu-item">
              <img src={watchLaterIcon} alt="" />
              <span>Watch Later</span>
            </div>
            <div className="menu-item">
              <img src={likedIcon} alt="" />
              <span>Liked Videos</span>
            </div>
          </div>
          <div className="text-white/[0.5] text-[12px]">
            Clone by: Bryan Blanco
          </div>
        </div>
      </div>
    </>
  )
}
