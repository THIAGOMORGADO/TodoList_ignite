import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../Theme';

export default function Loading() {
 return (
   <View style={styles.container}>
   
    <ActivityIndicator size={50} color={theme.colors.brand.blue} />
   </View>
  );
}