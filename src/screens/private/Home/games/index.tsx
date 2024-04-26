import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export function GamesBet() {
  const route = useRoute();
  const navigation = useNavigation();
  const { gamesBet } = route?.params || {};

  const games = [
    {
      id: '1',
      name: 'Crash',
      hits: '79%',
      times: {
        first: {
          time: '18:32',
          height: '4.30x',
          right: 'green',
        },
        second: {
          time: '18:45',
          height: '2.30x',
          right: 'green',
        },
        third: {
          time: '19:01',
          height: '10.30x',
          right: 'red',
        },
      },
      url: 'https://png.pngtree.com/png-clipart/20230102/original/pngtree-cartoon-illustration-red-rocket-png-image_8856222.png',
    },
    {
      id: '2',
      name: 'Double',
      hits: '87%',
      times: {
        first: {
          time: '19:32',
          height: 'Branco',
          right: 'red',
        },
        second: {
          time: '19:52',
          height: 'Branco',
          right: 'green',
        },
        third: {
          time: '20:10',
          height: 'Vermelho',
          right: 'red',
        },
      },
      url: 'https://static.gameloop.com/img/6bfc10b49c6e4b9923ffea9291a9535d.png?imageMogr2/thumbnail/172.8x172.8/format/webp',
    },
    {
      id: '3',
      name: 'Mines',
      hits: '99%',
      times: {
        first: {
          time: '19:32',
          height: '3x2',
          right: 'green',
        },
        second: {
          time: '19:52',
          height: '5x1',
          right: 'green',
        },
        third: {
          time: '20:10',
          height: '3x4',
          right: 'green',
        },
      },
      url: 'https://gifs.eco.br/wp-content/uploads/2023/07/imagens-de-bomba-png-0.png',
    },
  ];

  function goToResults(index: number) {
    const gamesBetInfo = games[index];

    navigation.navigate('Results', { gamesBetInfo, route: 'Results' });
  }

  const renderGmaes = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      onPress={() => goToResults(index)}
      style={{
        backgroundColor: '#323238',
        width: '100%',
        height: 64,
        justifyContent: 'center',
        marginBottom: 16,
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={{ uri: item.url }} style={{ width: 50, height: 50 }} />
          <Text style={{ color: '#f4f4f4', fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
        </View>
        <Text
          style={{ color: item?.hits >= '80' ? 'green' : 'red', fontSize: 18, fontWeight: '600' }}>
          {item?.hits}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121214' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#f4f4f4', fontSize: 28, fontFamily: 'Arial' }}>
          Jogos <Text style={{ fontWeight: 'bold' }}>{gamesBet?.name}</Text>
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
        <FlatList data={games} renderItem={renderGmaes} keyExtractor={(item) => item.id} />
      </View>
    </SafeAreaView>
  );
}
