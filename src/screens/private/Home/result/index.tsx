import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export function Results() {
  const navigation = useNavigation();
  const route = useRoute();
  const { gamesBetInfo } = route?.params || {};

  const renderResultGames = ({ item, index }: { item: any; index: number }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 91,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ borderWidth: 1, borderColor: '#F4F4F4', paddingHorizontal: 16 }}>
          <Text style={{ color: '#f4f4f4', fontSize: 28, fontWeight: 'bold' }}>Resultado</Text>
          <Text style={{ color: '#f4f4f4', fontSize: 16, fontWeight: '600' }}>
            {item.times?.first?.height || 'Dados não disponíveis'}
          </Text>
          <Text style={{ color: '#f4f4f4', fontSize: 16, fontWeight: '600' }}>
            {item.times?.second?.height || 'Dados não disponíveis'}
          </Text>
          <Text style={{ color: '#f4f4f4', fontSize: 16, fontWeight: '600' }}>
            {item.times?.third?.height || 'Dados não disponíveis'}
          </Text>
        </View>
        {/* fim do primeiro resultado */}
        <View style={{ borderWidth: 1, borderColor: '#F4F4F4', paddingHorizontal: 16 }}>
          <Text style={{ color: '#f4f4f4', fontSize: 28, fontWeight: 'bold' }}>Horário</Text>
          <Text style={{ color: '#f4f4f4', fontSize: 16, fontWeight: '600' }}>
            {item.times?.first?.time || 'Dados não disponíveis'}
          </Text>
          <Text style={{ color: '#f4f4f4', fontSize: 16, fontWeight: '600' }}>
            {item.times?.second?.time || 'Dados não disponíveis'}
          </Text>
          <Text style={{ color: '#f4f4f4', fontSize: 16, fontWeight: '600' }}>
            {item.times?.third?.time || 'Dados não disponíveis'}
          </Text>
        </View>
        {/* fim do segundo resultado */}

        <View style={{ borderWidth: 1, borderColor: '#F4F4F4', paddingHorizontal: 16 }}>
          <Text style={{ color: '#f4f4f4', fontSize: 28, fontWeight: 'bold' }}>Acerto</Text>
          <Text
            style={{
              color: item.times?.first?.right == 'green' ? 'green' : 'red',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item.times?.first?.right || 'Dados não disponíveis'}
          </Text>
          <Text
            style={{
              color: item.times?.second?.right == 'green' ? 'green' : 'red',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item.times?.second?.right || 'Dados não disponíveis'}
          </Text>
          <Text
            style={{
              color: item.times?.third?.right === 'green' ? 'green' : 'red',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item.times?.third?.right || 'Dados não disponíveis'}
          </Text>
        </View>
        {/* fim do terceiro resultado */}
      </View>
    );
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121214' }}>
      <View>
        <View style={{ flexDirection: 'row', gap: 70, paddingHorizontal: 16 }}>
          <TouchableOpacity onPress={goBack} style={{ alignSelf: 'center' }}>
            <Ionicons name="arrow-back-outline" size={27} color="white" />
          </TouchableOpacity>
          <Text style={{ color: '#f4f4f4', fontSize: 28, fontFamily: 'Arial' }}>
            Resultados <Text style={{ fontWeight: 'bold' }}>{gamesBetInfo?.name}</Text>
          </Text>
        </View>
        <FlatList
          data={gamesBetInfo ? [gamesBetInfo] : []}
          renderItem={renderResultGames}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
