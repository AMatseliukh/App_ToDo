import React from 'react';
import { Button } from 'react-native-paper';
interface PrimaryButtonProps {
  onPress?: () => void;
  title?: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress = () => {},
  title = '',
}) => {
  return (
    <Button
      mode="contained"
      buttonColor={'#E35336'}
      onPress={() => alert('Pressed')}
      style={{ alignSelf: 'flex-end', marginVertical: 20 }}
      contentStyle={{ width: 92, height: 40, paddingHorizontal: 0 }}
      labelStyle={{
        fontWeight: 600,
        textAlign: 'center',
        width: '100%',
        fontSize: 16,
      }}
    >
      {title}
    </Button>
  );
};
export default PrimaryButton;