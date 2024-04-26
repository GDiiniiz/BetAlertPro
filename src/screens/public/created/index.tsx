import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';

import { ButtonSend } from '../../../components/buttons/buttonSend';

import { Inputs } from '~/components/input';

export function CreatedAccount() {
  const navigation = useNavigation();

  function goBackToSign() {
    navigation.goBack();
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121214' }}>
      <View style={{ alignItems: 'center', marginTop: 104, marginBottom: 100 }}>
        <Text style={{ fontSize: 28, color: '#f4f4f4', fontWeight: '800', fontFamily: 'Arial' }}>
          BetAlertPro
        </Text>
      </View>
      <View style={{ paddingHorizontal: 16, gap: 16 }}>
        <Inputs placeholder="Nome:" />
        <Inputs placeholder="Sobrenome:" />
        <Inputs placeholder="Data de nascimento:" />
        <Inputs placeholder="Cpf:" />
        <Inputs placeholder="E-mail:" />
        <Inputs placeholder="Confirmar E-mail:" />
        <Inputs placeholder="Senha:" />
        <Inputs placeholder="Confirmar Senha:" />
        <ButtonSend textButton="Criar conta" />
      </View>

      <View style={{ alignItems: 'center', marginVertical: 16 }}>
        <Text style={{ color: '#323238', fontSize: 18 }}>ou</Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginBottom: 100 }}>
        <ButtonSend textButton="Já tenho conta" onPress={goBackToSign} />
      </View>
    </ScrollView>
  );
}
