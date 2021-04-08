import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  color: #047857;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #121212;
  color: #E5E7EB;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 15px 22px;
  font-size: 16px;

  border: 1px solid #6B7280;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  padding: 15px 22px;

  background-color: #111827;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: #4B5563;
`;