import { useState } from 'react'
import styles from './MyList.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'

const MyList = () => {
    const [isSidebarShow, setIsSidebarShow] = useState(false)

  return (
    <div>
        <div className={styles.wrapper}>
            <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow}/>
        </div>
    </div>
  )
}

export default MyList
