import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../Theme';
import type { TaskDTO } from '../../dtos/taskDTO';

export default function Task({title, isCompleted}: TaskDTO) {

 return (
   <View style={styles.taskContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons 
          name={isCompleted ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
          size={22}
          color={isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>{title}</Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons 
          name='trash-can-outline'
          size={20}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
   </View>
  );
}