import { View } from 'react-native';
import styled from 'styled-components/native';

import Margin from './margin';

const Profile = ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri }} size={size} />
      <TextContainer>
        <NameText>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex-direction: row;
  background-color: white;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const NameText = styled.Text`
  font-size: ${(props) => (props.isMe ? 16 : 15)}px;
  font-weight: ${(props) => (props.isMe ? 'bold' : 'normal')};
`;

const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 11)}px;
  color: grey;
`;
