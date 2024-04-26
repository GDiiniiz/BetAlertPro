import { SafeAreaView, View } from 'react-native';

import { ButtonSend } from '~/components/buttons/buttonSend';
import { Inputs } from '~/components/input';

export function ProfileAccount() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121214', justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 16, gap: 16 }}>
        <Inputs placeholder="Nome:" />
        <Inputs placeholder="Sobrenome:" />
        <Inputs placeholder="E-mail:" />
        <Inputs placeholder="Confirmar E-mail:" />
        <Inputs placeholder="Senha:" />
        <Inputs placeholder="Confirmar Senha:" />
        <ButtonSend textButton="Salvar alteração" />
      </View>
    </SafeAreaView>
  );
}
