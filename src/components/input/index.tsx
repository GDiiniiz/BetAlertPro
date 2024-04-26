import { TextInput } from 'react-native';

interface inputProps {
  placeholder: string;
}

export function Inputs({ placeholder }: inputProps) {
  return (
    <TextInput
      style={{
        backgroundColor: '#323238',
        color: '#F8F5F4',
        width: '100%',
        height: 54,
        borderRadius: 6,
        paddingHorizontal: 16,
      }}
      placeholder={placeholder}
      placeholderTextColor="#ccc"
      onChangeText={() => console.log('')}
    />
  );
}
