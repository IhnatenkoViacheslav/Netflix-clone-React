import { Link } from "react-router-dom"
import Search from "../../UI/Search/Search"
import styles from './Header.module.scss'
import Profile from "./Profile"


const Header = () => {
  return (
  <div className={styles.header}>
        <div>
            <Link to="/Popular">
                <img 
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                    alt="Netflix" 
                    height="35"
                    width='112'
                />
            </Link>
            <Search/>
        </div>
        <Profile/>
  </div>
  )
}

export default Header
