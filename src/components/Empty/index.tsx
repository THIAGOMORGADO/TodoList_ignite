import { Image, Text, View } from 'react-native';
import { styles } from './styles';

import clipboard from '../../assets/clipboard.png'

export default function Empty() {
 return (
  <View style={styles.emptyContainer}>
    <Image source={clipboard} style={styles.image}/>

    <View style={styles.emptyTextContainer}>
      <Text style={styles.textBold}>Voce ainda nao tem tarefas cadastradas</Text>
      <Text style={[styles.textBold, styles.textRegular]}>Cria tarefas e organize seu items a fazer</Text>
    </View>
   
  </View>
  );
}