import {FC} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { Items } from '../../const/featured-movies'
import styles from './MovieList.module.scss'

const MovieList: FC = () => {
  return (
    <ul className={styles.cardsList}>
      {Items.map(( item) => (
        <MovieCard item={item} key={item.title}/>
      ))}
    </ul>
  )
}

export default MovieList;
