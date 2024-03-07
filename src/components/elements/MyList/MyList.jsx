import { useState } from 'react'
import { DATA } from '../../../data'

import styles from './MyList.module.scss'
import Sidebar from '../../UI/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const MyList = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false)
  const [favMovies, setFavMovies] = useState(localStorage.getItem('favMovies'))

    const onRemoveFavFilm = (id) => {
        setFavMovies((prev) => 
            prev.filter((card) => card.id !== id))
        localStorage.removeItem('favMovies', id)
    }

  return (
    <div className={styles.mylist}>
        <div className={styles.wrapper}> 
            <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow}/>    
            <div className={styles.content} style={{width: isSidebarShow ? "85%" : "90%"}}>
                <div className={styles.title}>
                    <p>My List</p>
                </div>
                <div className={styles.grid}>
                    {DATA.map(film => {
                        if (favMovies && favMovies.includes(film.name)) {
                            return (
                                <div key={film.id} id={film.id} className={styles.filmCard}>
                                    <img src={film.preview} alt={film.name} />
                                    <div className={styles.controls}>
                                        <button
                                           
                                        ><i className='bx bx-play'></i></button>
                                        <button
                                            onClick={() => onRemoveFavFilm(film.id)}
                                        >
                                            <i className='bx bx-trash-alt'></i>
                                        </button>
                                    </div>
                                    <p>{film.name}</p>
                                </div>
                            )
                        } else {
                            return null
                        }
                    }
                        
                    )} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyList
