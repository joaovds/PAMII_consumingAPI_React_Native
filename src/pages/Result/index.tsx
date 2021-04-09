import React, { useCallback } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Container, GoBack, Image, MovieInfo, Title } from './styles';
import { useNavigation } from '@react-navigation/native'

import { Feather as Icon } from '@expo/vector-icons';

const Result: React.FC = () => {
  const navigation = useNavigation();

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
          <Image source={{ uri: 'https://images.pexels.com/photos/7171397/pexels-photo-7171397.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }} />
        </TouchableOpacity>

        <Title>The Lord of the Rings: The Fellowship of the Ring</Title>

        <MovieInfo>
          Year: 2001
        </MovieInfo>
        <MovieInfo>
          Runtime: 178 min
        </MovieInfo>
        <MovieInfo>
          Genre: Action, Adventure, Drama, Fantasy
        </MovieInfo>
        <MovieInfo>
          Director: Peter Jackson
        </MovieInfo>
        <MovieInfo>
          Plot: A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.
        </MovieInfo>
      </Container>
    </ScrollView>
  );
}
  
export default Result;
  