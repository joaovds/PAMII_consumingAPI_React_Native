import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { By, Container, Input, ButtonContainer, ButtonText, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [movieSearch, setMovieSearch] = useState('');

  const handleNavigateToResult = () => {
    navigation.navigate('Result', { search: movieSearch });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Title>Movie API</Title>

        <Input
          placeholder="Enter the name of the movie"
          autoCorrect={false}
          placeholderTextColor='#6B7280'
          value={movieSearch}
          onChangeText={text => setMovieSearch(text)}
        />

        <ButtonContainer onPress={handleNavigateToResult}>
          <ButtonText>
            Search
          </ButtonText>
        </ButtonContainer>

        <By>João Victor da Silva</By>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Home;
