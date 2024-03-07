import styles from './BottomNavigation.module.scss'

const tabs = [
    {
        _id: 1,
        name: 'Overview',
    },
    {
        _id: 2,
        name: 'Episodes',
    },
    {
        _id: 3,
        name: 'Details',
    }
]

const BottomNavigation = ({activeTab, setActiveTab}) => {
  return (
    <nav className={styles.nav}>
        {tabs.map(tab => (
            <button key={tab._id} className={activeTab === tab._id ? styles.active : ''} onClick={() => setActiveTab(tab._id)}>{tab.name}</button>
        ))}
    </nav>
  )
}

export default BottomNavigation
