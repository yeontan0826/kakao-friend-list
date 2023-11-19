import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

const IconButton = (props) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 15, bottom: 15 }}
      style={{ paddingHorizontal: 6 }}
    >
      <Ionicons name={props.name} size={24} color={'black'} />
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <FriendText>친구</FriendText>
      <View style={{ flexDirection: 'row' }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="settings-outline" />
      </View>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const FriendText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
