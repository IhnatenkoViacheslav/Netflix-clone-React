import styles from './ProfileModal.module.scss'

const ProfileModal = () => {
  return (
    <div className={styles.profileModal}>
        <ul className={styles.menu}>
            <li>
                <div className={styles.button}>
                    <i className='bx bx-user'></i>
                    <p>Account</p>
                </div>
            </li>
            <li>
                <div className={styles.button}>
                    <i className='bx bx-help-circle'></i>
                    <p>Help Center</p>
                </div>
            </li>
        </ul>
        <div className={styles.login}><button><p>Sign out of Netflix</p></button></div>
    </div>
  )
}

export default ProfileModal
