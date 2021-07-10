import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {

  return (
    <>
      <h1 style={{ "color": "red" }}>Movie page</h1>
    </>
  );
};

export default Movie;
