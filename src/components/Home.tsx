import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../styles/Styles';
import RenderItem from './RenderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

const Home = ({navigation}: {navigation: any}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('my-key', JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        setTasks(JSON.parse(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const markDone = (task: Task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    storeData(newTasks);
  };

  const deleteFunction = (task: Task) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(task);
    newTasks.splice(index, 1);
    setTasks(newTasks);
    storeData(newTasks);
  };
  const today = new Date().toISOString().split('T')[0];

  const filteredTasks = tasks.filter(item => {
    if (item.date instanceof Date) {
      const itemDate = item.date.toISOString().split('T')[0];
      return itemDate === today;
    }
    return false;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas para hoy</Text>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() =>
            navigation.navigate('Nueva Tarea', {
              setTasks: setTasks,
              tasks: tasks,
              storeData: storeData,
            })
          }>
          <Text style={styles.whiteText}>Agregar tarea</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.whiteText}>Otras tareas</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={filteredTasks}
        />
      </View>
      <Text>{}</Text>
    </View>
  );
};

export default Home;
