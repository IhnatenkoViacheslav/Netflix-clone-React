import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const menu = [
  'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({isSidebarShow, setIsSidebarShow}) => {
  return (
    <div className={styles.sidebar} style={{width: isSidebarShow ? "15%" : "10%"}}>
      <button onClick={() => setIsSidebarShow((prev) => !prev)}>
        <i className={`bx bx-${isSidebarShow ? 'x' : 'menu'}`}></i>
      </button>
      <ul className={isSidebarShow ? styles.show : ''}>
        {menu.map((title) => (
          <li key={title}>
            <Link to={`/${title.replaceAll(' ', '')}`}>{title}</Link>
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default Sidebar
