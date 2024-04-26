import 'react-native-gesture-handler';

import RootStack from './navigation';

import { AuthProvider } from '~/context/auth-context';

export default function App() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}
