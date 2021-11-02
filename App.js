import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskitems] = useState([])

  const handleTask = () => {
    //console.log(task)
    setTaskitems([...taskItems, task])
    setTask(null)
  }

  return (
    <View style={styles.container}>
      {/* Todo's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectiontitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((val, index) => {
             return(
              <Task task={val} key={index}/>
             )
            })
          }
        </View>
      </View>

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      style={styles.writetastWrapper}
    >
      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity> 
    </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 60,
    paddingHorizontal: 20
  },
sectiontitle:{
  fontSize: 24,
  fontWeight: 'bold'
},
items:{
marginTop: 30
},
writetastWrapper:{
  position: 'absolute',
  bottom: 5,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input:{
  paddingVertical: 7,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 8,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper:{
  width: 50,
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText:{
  fontSize: 23,
},
});
