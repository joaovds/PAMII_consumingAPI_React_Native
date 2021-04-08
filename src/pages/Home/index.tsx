import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Input, ButtonContainer, ButtonText, Title } from './styles';

const Home: React.FC = () => {
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

        <ButtonContainer>
          <ButtonText>
            Search
          </ButtonText>
        </ButtonContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default Home;
