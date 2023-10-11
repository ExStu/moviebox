import { IMovie } from '../types/Movie.interface'

export const Items: IMovie[] = [
  {
    image: '/images/poster-1.png',
    date: 'USA, 2016 - Current',
    title: 'Stranger Things',
    rating: '86.0 / 100',
    pomodoro: '97%',
    genres: 'Action, Adventure, Horror',
    tv: true,
  },
  {
    image: '/images/poster-2.png',
    date: 'USA, 2005',
    title: 'Batman Begins',
    rating: '82.0 / 100',
    pomodoro: '70%',
    genres: 'Action, Adventure',
    tv: false
  },
  {
    image: '/images/poster-3.png',
    date: 'USA, 2018',
    title: 'Spider-Man : Into The Spider Verse',
    rating: '84.0 / 100',
    pomodoro: '87%',
    genres: 'Animation, Action, Adventure',
    tv: false
  },
  {
    image: '/images/poster-4.png',
    date: 'USA, 2017',
    title: 'Dunkirk',
    rating: '78.0 / 100',
    pomodoro: '94%',
    genres: 'Action, Drama, History',
    tv: false
  }
]