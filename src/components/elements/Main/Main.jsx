import { useState } from 'react'
import { DATA } from '../../../data'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'

import Sidebar from '../../UI/Sidebar/Sidebar'
import Information from './Information'
import styles from './Main.module.scss'
import Episodes from '../Episodes/Episodes'
import Player from '../Player/Player'

const Main = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [isPlayerShow, setIsPlayerShow] = useState(false)

  return (
    <div>
      {isPlayerShow ? <Player setIsPlayerShow={setIsPlayerShow}/> : 
      <div className={styles.wrapper}>
        <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow}/>
        <div className={styles.main} style={{backgroundImage: `url(${DATA[0].mainImage})`, width: isSidebarShow ? "85%" : "90%"}}>
          {activeTab === 1 ? 
          <Information isPlayerShow={isPlayerShow} setIsPlayerShow={setIsPlayerShow} movie={DATA[0]}/>
          : activeTab === 2 && <Episodes movie={DATA[0]}/> }
        </div>
          <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>}
    </div>
  )
}

export default Main
