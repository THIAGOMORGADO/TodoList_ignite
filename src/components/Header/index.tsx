import { Image, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LogoImage from '../../assets/logo.png';
import { theme } from '../../Theme';

type HeaderProps = {
  task: string;
  onChangeText: (task: string) => void
  onPress: () => void;
  inputRef: React.RefObject<TextInput>;
}

export default function Header({onChangeText, task, onPress, inputRef}: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Image source={LogoImage} />

      <View style={styles.form}>
        <TextInput
          style={[styles.input, inputRef.current?.isFocused() && task ? styles.inputBorder : null]} 
          keyboardAppearance='dark' 
          placeholder='Adicionar uma nova Tarefa..' 
          placeholderTextColor={theme.colors.base.gray300} 
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType='done'
        />
        <TouchableOpacity style={styles.btn} onPress={onPress} >
          <MaterialCommunityIcons name='plus-circle-outline' size={22} color={theme.colors.base.gray100} />
        </TouchableOpacity>
      </View>


    </View>
  );
}