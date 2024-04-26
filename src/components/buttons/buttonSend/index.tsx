import { Text, TouchableOpacity } from 'react-native';

interface buttonSendProps {
  textButton: string;
  onPress?: () => void;
}

export function ButtonSend({ textButton, onPress }: buttonSendProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#F4130F',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        borderRadius: 8,
      }}>
      <Text style={{ color: '#F8F5F4', fontSize: 21, fontWeight: 'bold' }}>{textButton}</Text>
    </TouchableOpacity>
  );
}
