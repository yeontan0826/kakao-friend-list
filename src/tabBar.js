import { View } from 'react-native';
import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

const TabButton = ({ isSelected, onPress, activeIcon, inactiveIcon }) => {
  return (
    <CustomTabButton activeOpacity={1} onPress={onPress}>
      <Ionicons
        name={isSelected ? activeIcon : inactiveIcon}
        size={24}
        color="black"
      />
    </CustomTabButton>
  );
};

const TabBar = ({ selectedTabIdx, setSelectedTabIdx }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 0.5,
        borderTopColor: 'grey',
      }}
    >
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIcon={'person'}
        inactiveIcon={'person-outline'}
        isIconFontisto
      />
      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIcon={'chatbubble'}
        inactiveIcon={'chatbubble-outline'}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIcon={'pricetag'}
        inactiveIcon={'pricetag-outline'}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIcon={'add-circle'}
        inactiveIcon={'add-circle-outline'}
        isIconIonicons
      />
    </View>
  );
};

export default TabBar;

const CustomTabButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
