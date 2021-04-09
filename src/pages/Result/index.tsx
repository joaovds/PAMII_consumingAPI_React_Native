import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Container, GoBack, Image, MovieInfo, Title } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Feather as Icon } from '@expo/vector-icons';

import axios from 'axios';
import { OMDb_API_KEY } from '../../../variables';

interface IParams {
  search: string;
}

interface IMovieInfo {
  Actors: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Plot: string;
  Poster: string;
  Runtime: string;
  Title: string;
  Year: string;
}

const Result: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movieInfo, setMovieInfo] = useState<IMovieInfo>();

  const routeParams = route.params as IParams;
  const { search } = routeParams;

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${OMDb_API_KEY}&t=${search}`).then((response) => {
      setMovieInfo(response.data);
    });
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <ScrollView>
      <Container>
        <GoBack onPress={handleGoBack}>
          <Icon name='arrow-left' size={24} color='#6B7280' />
        </GoBack>

        <TouchableOpacity onPress={() => {console.log('test')}}>
          <Image
            source={{ uri: `${movieInfo?.Poster}` }}
          />
        </TouchableOpacity>

        <Title>{movieInfo?.Title}</Title>

        <MovieInfo>
          Actors: {movieInfo?.Actors}
        </MovieInfo>
        <MovieInfo>
          Country: {movieInfo?.Country}
        </MovieInfo>
        <MovieInfo>
          Director: {movieInfo?.Director}
        </MovieInfo>
        <MovieInfo>
          Genre: {movieInfo?.Genre}
        </MovieInfo>
        <MovieInfo>
          Language: {movieInfo?.Language}
        </MovieInfo>
        <MovieInfo>
          Runtime: {movieInfo?.Runtime}
        </MovieInfo>
        <MovieInfo>
          Year: {movieInfo?.Year}
        </MovieInfo>
        <MovieInfo>
          Plot: {movieInfo?.Plot}
        </MovieInfo>
      </Container>
    </ScrollView>
  );
}
  
export default Result;
  