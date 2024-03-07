// import ReactPlayer from 'react-player'
import styles from './Player.module.scss'



const Player = ( {setIsPlayerShow} ) => {
  return (
    <div className={styles.video_player}>
        <div className={styles.cover}>
            <div className={styles.upper_controls}>
                <button
                    onClick={() => setIsPlayerShow(false)}
                ><i className='bx bx-left-arrow-alt'></i> </button>
                <button><i className='bx bx-flag'></i></button>     
            </div>
            {/* <div >
                <ReactPlayer  
                    controls 
                    url='https://www.youtube.com/watch?v=TcMBFSGVi1c'
                />
            </div> */}
            <ul className={styles.bottom_controls}>
                <li className={styles.left_options}>
                    <button><i className='bx bx-play'></i></button>
                    <button><i className='bx bx-caret-left-circle'></i></button>
                    <button><i className='bx bx-caret-right-circle'></i></button>
                </li>
                <li className={styles.right_options}>
                    <button><i className='bx bx-skip-next-circle'></i></button>
                    <button><i className='bx bx-list-ul'></i></button>
                    <button><i className='bx bx-time'></i></button>
                    <button><i className='bx bx-fullscreen'></i></button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Player
