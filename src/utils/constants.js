import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const API_KEY = '9f198d2a31c369e7b83b1eb493f9521d';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjE5OGQyYTMxYzM2OWU3YjgzYjFlYjQ5M2Y5NTIxZCIsIm5iZiI6MTcyMDgwNDI5OC44ODUsInN1YiI6IjY2OTE2M2NhMGY3YWFhZGJmZjJjZGZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OA07WsCYPFrq8zWVLIjnaqukxEivSbktD1o3zaRHz4';

const sections = [
  {
    id: 1,
    title: 'Top Rated',
  },
  {
    id: 2,
    title: 'Popular Movies',
  },
  {
    id: 3,
    title: 'Upcoming ',
  },
  {
    id: 4,
    title: 'My List',
  },
];

export {width, height, API_KEY, token, sections};
