import { useState } from 'react'
import styles from './Header.module.scss'
import ProfileModal from '../ProfileModal/ProfileModal'

const Profile = () => {
    const [showModal, setShowModal] = useState(false)


  return (
    <div className={styles['profile-wrapper']}>
        <div className={styles.notification}>
            <i className='bx bxs-bell'></i>
            <span></span>
        </div>
        <div className={styles.profile}>
            <div>
                <img 
                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50" 
                    alt="" 
                />
            </div>
            <button onClick={() => setShowModal((prev) => !prev)}><i className='bx bx-caret-down'></i></button>
        </div>
        {showModal ? 
        <ProfileModal/> : null}
    </div>
  )
}

export default Profile
