import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { Container, GoBack } from './styles';
import { useNavigation } from '@react-navigation/native'

import { Feather as Icon } from '@expo/vector-icons';

const Result: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Container>
      <GoBack onPress={handleGoBack}>
        <Icon name='arrow-left' size={24} color='#6B7280' />
      </GoBack>
      <Text>Result</Text>
    </Container>
  );
}
  
export default Result;
  