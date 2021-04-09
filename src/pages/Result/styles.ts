import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const GoBack = styled.TouchableOpacity`
  padding: 10px;
  align-self: flex-start;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 10px;

  border: 2px solid #ECFDF5;
`;

export const Title = styled.Text`
  color: #ECFDF5;
  font-size: 28px;
  font-weight: bold;
  margin: 15px 0;
  text-align: center;
`;

export const MovieInfo = styled.Text`
  align-self: flex-start;

  color: #4B5563;
  font-size: 18px;
  margin: 5px 0 10px 0;
  text-align: left;
`;
