import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Input, ButtonContainer, ButtonText, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToResult = useCallback(() => {
    navigation.navigate('Result');
  }, []);

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
        />

        <ButtonContainer onPress={handleNavigateToResult}>
          <ButtonText>
            Search
          </ButtonText>
        </ButtonContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Home;
