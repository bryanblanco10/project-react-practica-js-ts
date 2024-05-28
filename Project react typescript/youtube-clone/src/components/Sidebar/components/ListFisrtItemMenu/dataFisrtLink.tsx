import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball
} from 'react-icons/md'
import { FaRegCompass } from 'react-icons/fa'
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb'
import { GiFilmStrip } from 'react-icons/gi'
export const dataFisrtLink = [
  {
    title: '',
    list: [
      {
        icon: <MdHomeFilled className="text-xl" />,
        name: 'Home'
      },
      {
        icon: <FaRegCompass className="text-xl" />,
        name: 'Explore'
      },
      {
        icon: <MdOutlineSlowMotionVideo className="text-xl" />,
        name: 'Shorts'
      },
      {
        icon: <MdSubscriptions className="text-xl" />,
        name: 'Subscriptions'
      }
    ]
  },
  {
    title: '',
    list: [
      {
        icon: <MdOutlineVideoLibrary className="text-xl" />,
        name: 'Library'
      },
      {
        icon: <MdHistory className="text-xl" />,
        name: 'History'
      },
      {
        icon: <MdOutlineSmartDisplay className="text-xl" />,
        name: 'Your Videos'
      },
      {
        icon: <MdOutlineWatchLater className="text-xl" />,
        name: 'Watch Later'
      },
      {
        icon: <MdThumbUpOffAlt className="text-xl" />,
        name: 'Liked Videos'
      }
    ]
  },
  {
    title: '',
    list: [
      {
        icon: <TbMusic className="text-xl" />,
        name: 'Music'
      },
      {
        icon: <MdOutlineSportsVolleyball className="text-xl" />,
        name: 'Sport'
      },
      {
        icon: <TbDeviceGamepad2 className="text-xl" />,
        name: 'Gaming'
      },
      {
        icon: <GiFilmStrip className="text-xl" />,
        name: 'Films'
      }
    ]
  },
  {
    title: '',
    list: [
      {
        icon: <MdSettings className="text-xl" />,
        name: 'Settings'
      },
      {
        icon: <MdOutlinedFlag className="text-xl" />,
        name: 'Report history'
      },
      {
        icon: <MdOutlineHelpOutline className="text-xl" />,
        name: 'Help'
      },
      {
        icon: <MdOutlineFeedback className="text-xl" />,
        name: 'Send feedback'
      }
    ]
  }
]
