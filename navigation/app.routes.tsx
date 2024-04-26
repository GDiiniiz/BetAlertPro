import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HomeIndex } from '../src/screens/private/Home';

import { ProfileAccount } from '~/screens/private/Account';

const TabIcon: React.FC<{ name: string }> = ({ name }) => {
  return <Ionicons name={name as any} size={32} color="#F4130F" />;
};

export function AppRoutes() {
  const { Screen: TabScreen, Navigator: TabNavigator } = createBottomTabNavigator();

  return (
    <TabNavigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F4130F',
        tabBarStyle: {
          justifyContent: 'center',
          backgroundColor: '#202024',
          borderTopWidth: 0,
          paddingTop: 2,
          elevation: 0,
        },
      }}>
      <TabScreen
        name="Home"
        component={HomeIndex}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="home-outline" />,
          tabBarLabel: () => null,
        }}
      />
      <TabScreen
        name="Account"
        component={ProfileAccount}
        options={{
          unmountOnBlur: true,
          tabBarIcon: () => <TabIcon name="person-outline" />,
          tabBarLabel: () => null,
        }}
      />
    </TabNavigator>
  );
}
