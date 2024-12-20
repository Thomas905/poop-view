import { Tabs } from 'expo-router';
import React from 'react';
import '../../assets/global.css'
import TabBar from "@/components/TabBar";
import '../../assets/global.css'
import {Image, View} from "react-native";

export default function TabLayout() {
  return (
      <>
          <View className={"flex items-center border-b border-gray-200 bg-white"}>
                <Image source={require('../../assets/images/logo.png')} className={"w-24 h-24"} />
          </View>
          <Tabs
              screenOptions={{
                  headerShown: false,
                  tabBarShowLabel: false,
              }}
              tabBar={(props) => <TabBar {...props} descriptors={props.descriptors} />} // Passer les descriptors
          >
              <Tabs.Screen name="index" options={{ title: 'Map' }} />
              <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
              <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
          </Tabs>
      </>
  );
}
