import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import { CreatedAccount } from '~/screens/public/created';
import { SignIn } from '~/screens/public/signin';

export function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeft: (props) => <TouchableOpacity {...props} />,
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerShown: false,
      }}
      initialRouteName="SingnIn">
      <Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Screen name="CreatedAccount" component={CreatedAccount} options={{ headerShown: false }} />
    </Navigator>
  );
}
