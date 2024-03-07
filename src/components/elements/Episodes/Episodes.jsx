import styles from './Episodes.module.scss'

const Episodes = ({ movie }) => {
  return (
    <div className={styles.episodes}>
      <img src={movie.logo} alt={movie.name} width='200' style={{opacity: 0.7}}/>
      <div className={styles.navigation}>
        <button>
          <span>3 season</span>
          <i className='bx bx-caret-down'></i>
        </button>
        <button style={{fontSize: '14px'}}>
          See All
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
      <div className={styles.all_series}>
        {movie.photos.map((photo, i) => (
          <div key={i}>
            <img src={photo} alt="Episode" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes
