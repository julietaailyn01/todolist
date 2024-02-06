import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../styles/Styles';
import {useState} from 'react';
import { Task } from './Home';

export interface newTaskProps {
  addTask: () => void;
}

const NewTask = ({navigation, route}: any) => {
  const [task, setTask] = useState('');
  const {tasks, setTasks, storeData} = route.params;
  const addTask = () => {
    if (task) {
      const newTask: Task = {
        title: task,
        done: false,
        date: new Date(),
      };
      setTasks([...tasks, newTask]);
      setTask('');
      storeData([...tasks, newTask]);
      navigation.navigate('Hoy');
    }
  };

  return (
    <View style={styles.container}>
      <Text
      style={styles.title}
      >Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar nueva tarea"
          onChangeText={text => setTask(text)}
          style={styles.textInput}
          value={task}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.whiteText}>Agregar</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default NewTask;
