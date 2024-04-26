import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { ButtonSend } from '../../../components/buttons/buttonSend';

import { Inputs } from '~/components/input';
import { useAuthContext } from '~/context/auth-context';

export function SignIn() {
  const navigation = useNavigation();
  const { setSignIn } = useAuthContext();

  function goToCreatedAccount() {
    navigation.navigate('CreatedAccount');
  }

  return (
    <ScrollView style={{ backgroundColor: '#121214' }}>
      <SafeAreaView>
        <View style={{ alignItems: 'center', marginTop: 24, marginBottom: 200 }}>
          <Text style={{ fontSize: 28, color: '#f4f4f4', fontWeight: '800', fontFamily: 'Arial' }}>
            BetAlertPro
          </Text>
        </View>

        <View style={{ paddingHorizontal: 16, gap: 16 }}>
          <Inputs placeholder="E-mail:" />
          <Inputs placeholder="Senha:" />
          <ButtonSend textButton="Entrar" onPress={() => setSignIn(true)} />
        </View>

        <View style={{ alignItems: 'center', marginVertical: 32 }}>
          <Text style={{ color: '#323238', fontSize: 18 }}>ou</Text>
        </View>

        <View style={{ gap: 16 }}>
          <TouchableOpacity
            onPress={() => setSignIn(true)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#323238',
              marginHorizontal: 32,
              height: 54,
              borderRadius: 8,
            }}>
            <Text style={{ color: '#f4f4f4', fontSize: 18, fontWeight: 'bold' }}>
              Entrar com Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#323238',
              marginHorizontal: 32,
              height: 54,
              borderRadius: 8,
            }}>
            <Text style={{ color: '#f4f4f4', fontSize: 18, fontWeight: 'bold' }}>
              Entrar com Apple
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 16, marginVertical: 16, gap: 8, marginTop: 64 }}>
          <Text style={{ color: '#323238', textAlign: 'center' }}>Ainda não tem acesso?</Text>
          <ButtonSend onPress={goToCreatedAccount} textButton="Criar conta" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
