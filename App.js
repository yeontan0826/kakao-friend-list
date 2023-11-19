import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { friendProfiles, myProfile } from './src/data';

import Header from './src/header';
import Profile from './src/profile';
import Margin from './src/margin';
import Division from './src/division';
import FriendSection from './src/friendSection';
import TabBar from './src/tabBar';

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened((prev) => !prev);
  };

  /**
   * 목록 헤더 영역
   *
   * 헤더, 내 프로필, 친구 목록
   */
  const ListHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        {/* 헤더 영역 */}
        <Header />
        <Margin height={10} />
        {/* 내 프로필 영역 */}
        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
          isMe={true}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        {/* 친구 목록 영역 */}
        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPress={onPressArrow}
          isOpened={isOpened}
        />
        <Margin height={10} />
      </View>
    );
  };

  const ListFooterComponent = () => {
    return <Margin height={10} />;
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;

  const renderItem = ({ item }) => (
    <Profile
      uri={item.uri}
      name={item.name}
      introduction={item.introduction}
      isMe={false}
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, index) => String(index)}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
