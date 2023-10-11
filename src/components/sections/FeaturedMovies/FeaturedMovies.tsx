import { FC } from 'react'
import Container from '../../Container/Container'
import MovieList from '../../MovieList/MovieList'
import { ReactComponent as ChevronIcon } from '../../../assets/icons/chevron.svg'
import styles from './FeaturedMovies.module.scss'

const FeaturedMovies: FC = () => {
  return (
    <section className={styles.featured}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Featured Movies</h2>
          <button className={styles.more}>
            See more 
            <ChevronIcon/>
          </button>
        </div>
        <MovieList/>
      </Container>
    </section>
  );
}

export default FeaturedMovies;