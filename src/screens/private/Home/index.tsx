import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import { GamesBet } from './games';
import { Home } from './home';
import { Results } from './result';

const { Navigator, Screen } = createStackNavigator();

export function HomeIndex() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const params = { ...route.params };
      delete params?.route;
      navigation.navigate(route?.params?.route, params);
    }
  }, [route?.params]);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Games" component={GamesBet} />
      <Screen name="Results" component={Results} />
    </Navigator>
  );
}
