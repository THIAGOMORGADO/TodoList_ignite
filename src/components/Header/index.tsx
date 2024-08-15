import { Image, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LogoImage from '../../assets/logo.png';
import { theme } from '../../Theme';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={LogoImage} />

      <View style={styles.form}>
        <TextInput style={styles.input} keyboardAppearance='dark' placeholder='Adicionar uma nova Tarefa ...' placeholderTextColor={theme.colors.base.gray300} />
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons name='plus-circle-outline' size={22} color={theme.colors.base.gray100} />
        </TouchableOpacity>
      </View>


    </View>
  );
}