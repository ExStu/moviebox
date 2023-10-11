import {FC} from 'react'
import styles from './MovieCard.module.scss'
import { IMovie } from '../../types/Movie.interface'
import {ReactComponent as Heart} from '../../assets/icons/heart.svg'
import imdbImg from '../../assets/icons/imdb.png'
import pomodoroImg from '../../assets/icons/pomodoro.png'

interface IMovieCard {
  item: IMovie
}

const MovieCard: FC<IMovieCard> = ({item}) => {
  return (
    <li className={styles.card}>
      {item.tv && (<div className={styles.tv}>tv series</div>)}
      <button className={styles.favourite}>{<Heart/>}</button>
      <img className={styles.image} src={item.image} alt={item.title} />
      <div className={styles.desc}>
        <span className={styles.date}>{item.date}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.ratings}>
          <span className={styles.imdb}>
            <img src={imdbImg} alt="IMDB logo" />
            {item.rating}
          </span>
          <span className={styles.pomodoro}>
            <img src={pomodoroImg} alt="Pomodoro" />
            {item.pomodoro}
          </span>
        </div>
        <p className={styles.genres}>{item.genres}</p>
      </div>
    </li>
  )
}

export default MovieCard;
