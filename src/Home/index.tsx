import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../components/Header";
import Task from "../components/Task";
import { useState } from "react";
import type { TaskDTO } from "../dtos/taskDTO";
import Empty from "../components/Empty";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([
    // {id: '1', isCompleted: true, title: 'estudar react native'},
    // {id: '2', isCompleted: false, title: 'estudar react native'},
    // {id: '3', isCompleted: true, title: 'estudar react native'},
  ]);
  return(
    <View style={styles.container}>
      <Header />

      <View style={styles.taskContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.taskCreated}>Criadas</Text>
            <View style={styles.counterConteiner}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.taskDone}>Concluidas</Text>
            <View style={styles.counterConteiner}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View> 

        <FlatList 
          ListEmptyComponent={<Empty />}
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({ item }) => <Task key={item.id} isCompleted={item.isCompleted} title={item.title} />}
        />
      </View>
    </View>
  )
}