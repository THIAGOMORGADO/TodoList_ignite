import { Alert, FlatList, Text, View, type TextInput } from "react-native";
import { styles } from "./styles";
import Header from "../components/Header";
import Task from "../components/Task";
import { useRef, useState } from "react";
import type { TaskDTO } from "../dtos/taskDTO";
import Empty from "../components/Empty";
import { uuid } from "../utils/uuid";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState('')  
  const newTaskInputRef = useRef<TextInput>(null);

  const handleTaskAdd = () => {
    if(newTask !== '' && newTask.length > 5) {
      setTasks(tasks => [...tasks, {id: uuid(), isCompleted: false, title: newTask.trim()}]);
    }
    setNewTask('');
    newTaskInputRef.current?.blur();
  }
  const handleTaskDone = (id: string) => {
      setTasks((task) => 
        task.map((task) => {task.id === id ? (task.isCompleted = !task.isCompleted) : null
        return task
      })
    
    )
  }
  const handleTaskDelete = (id: string) => {
    Alert.alert('Excluir tarefa!', 'Deseja excluir essa tarefa !', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () =>  setTasks((task) => task.filter((task) => task.id !== id)),
        style: 'destructive',
      } 
    ])
  }
  const totalTaskCreated = tasks.length;

  const totalTaskCompleted = tasks.filter((task) => task.isCompleted).length;

  return(
    <View style={styles.container}>
      <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd} inputRef={newTaskInputRef}/>
      <View style={styles.taskContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.taskCreated}>Criadas</Text>
            <View style={styles.counterConteiner}>
              <Text style={styles.counterText}>{totalTaskCreated}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.taskDone}>Concluidas</Text>
            <View style={styles.counterConteiner}>
              <Text style={styles.counterText}>{totalTaskCompleted}</Text>
            </View>
          </View>
        </View> 

        <FlatList 
          ListEmptyComponent={<Empty />}
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => 
            <Task 
              key={item.id} 
              onTaskDone={() => handleTaskDone(item.id)} 
              onTaskDeleted={() => handleTaskDelete(item.id)} 
              {...item}
          />
        }
        />
      </View>
    </View>
  )
}