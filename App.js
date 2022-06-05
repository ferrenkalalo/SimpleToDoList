import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Tasks from './Components/Tasks';

const SimpleToDoList = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addNewTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let tasksCopy = [...taskItems];
    tasksCopy.splice(index, 1);
    setTaskItems(tasksCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <ScrollView>
          <View>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Tasks text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      {/* Section for write new task */}
      {/* Why use keyboardAvoidingView? To make the keyboard push everything up instead of cover the components below*/}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'write new task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => addNewTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addSymbol}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SimpleToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F8',
  },
  taskWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#21273D',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    width: 280,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#B9D4F1',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderColor: '#B9D4F1',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addSymbol: {
    fontSize: 30,
  },
});
