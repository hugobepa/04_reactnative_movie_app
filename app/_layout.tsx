import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import '@/global.css';
import { Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const RootLayout = () => {

  nowPlayingAction();

  return (
   <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to RootLayout!
      </Text>
      <Slot/>
    </View>
  )
}

export default RootLayout
