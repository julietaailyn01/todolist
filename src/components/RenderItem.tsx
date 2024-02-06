import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles/Styles';
import {Task} from './Home';

interface RenderItemProps {
  item: Task;
  markDone: (task: Task) => void;
  deleteFunction: (task: Task) => void;
}
const RenderItem = ({item, markDone, deleteFunction}: RenderItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markDone(item)}>
        <Text style={item.done ? styles.textDone : styles.text}>
          {item.title}
        </Text>
        <Text style={item.done ? styles.textDone : styles.text}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => deleteFunction(item)}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RenderItem;
