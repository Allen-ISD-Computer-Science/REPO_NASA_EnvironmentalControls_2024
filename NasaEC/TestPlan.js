import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TestStyles } from './Styles/Development/DeveloperTestPage/TestPageStyles';

export default class TestPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: '',
      tasks: [],
      editingTaskId: null,
      editText: '',
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
    try {
      const tasksJson = await AsyncStorage.getItem('tasks');
      if (tasksJson !== null) {
        const tasks = JSON.parse(tasksJson);
        this.setState({ tasks });
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  saveTasks = async (tasks) => {
    try {
      const tasksJson = JSON.stringify(tasks);
      await AsyncStorage.setItem('tasks', tasksJson);
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  saveTask = () => {
    const { taskInput, tasks } = this.state;
    if (taskInput.trim() !== '') {
      const newTask = { id: Date.now(), text: taskInput, completed: false };
      const updatedTasks = [...tasks, newTask];
      this.setState({ tasks: updatedTasks, taskInput: '' });
      this.saveTasks(updatedTasks);
    }
  };

  removeTask = (taskId) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
    this.saveTasks(updatedTasks);
  };

  editTask = (taskId, newText) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, text: newText };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks, editingTaskId: null, editText: '' });
    this.saveTasks(updatedTasks);
  };

  markComplete = (taskId) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
    this.saveTasks(updatedTasks);
  };

  markIncomplete = (taskId) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: false };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
    this.saveTasks(updatedTasks);
  };

  startEditTask = (taskId, text) => {
    this.setState({ editingTaskId: taskId, editText: text });
  };

  cancelEditTask = () => {
    this.setState({ editingTaskId: null, editText: '' });
  };
  
  renderTaskItem = ({ item }) => {
    const { editingTaskId, editText } = this.state;
    
    if (editingTaskId === item.id) {
        return (
        <View style={TestStyles.taskContainer}>

            <TextInput
                style={[TestStyles.taskText, TestStyles.editInput]}
                value={editText}
                onChangeText={text => this.setState({ editText: text })}
            />

            <Pressable
                style={({ pressed }) => [
                TestStyles.button,
                TestStyles.saveButton,
                { opacity: pressed ? 0.5 : 1 } // Reduce opacity when pressed
                ]}
                onPress={() => this.editTask(item.id, editText)}
            >
                <Text style={TestStyles.buttonText}>Save</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [
                TestStyles.button,
                TestStyles.cancelButton,
                { opacity: pressed ? 0.5 : 1 } // Reduce opacity when pressed
                ]}
                onPress={this.cancelEditTask}
            >
                <Text style={TestStyles.buttonText}>Cancel</Text>
            </Pressable>
        </View>
        );
    } else {
        return (
        <View style={TestStyles.taskContainer}>

        <Text style={[TestStyles.taskText, item.completed && TestStyles.completedTask]}>{item.text}</Text>

        {/* Button that initiates the Remove part in the Test Page*/}
        <TouchableOpacity
            style={[TestStyles.button, TestStyles.removeButton]}
            onPress={() => this.removeTask(item.id)}
        >
            <Text style={[TestStyles.buttonText, TestStyles.removeButton]}> Remove </Text>
        </TouchableOpacity>

        {/* Button that initiates the Edit part in the Test Page*/}
        <TouchableOpacity
            style={[TestStyles.button, TestStyles.editButton]}
            onPress={() => this.startEditTask(item.id, item.text)}
        >
            <Text style={[TestStyles.buttonText, TestStyles.editButton]}> Edit </Text>
        </TouchableOpacity>

        {/* Button that initiates the Complete part in the Test Page*/}
        <TouchableOpacity
            style={[TestStyles.button, TestStyles.completeButton]}
            onPress={() => this.markComplete(item.id)}
        >
            <Text style={TestStyles.buttonText}> Passing </Text>
        </TouchableOpacity>

        {/* Button that initiates the Incomplete part in the Test Page*/}
        <TouchableOpacity
            style={[TestStyles.button, TestStyles.incompleteButton]}
            onPress={() => this.markIncomplete(item.id)}
        >
            <Text style={TestStyles.buttonText}> Not Passing Yet </Text>
        </TouchableOpacity>

        </View>
        );
    }
  };
  

  render() {
    const { taskInput, tasks } = this.state;
    const { width, height } = Dimensions.get('window');
    const scaleFactor = Math.min(width / 1180, height / 820);

    return (
      <View style={TestStyles.container}>
        <Text style={TestStyles.title}> Test Planner </Text>
        <View style={TestStyles.inputContainer}>
          <TextInput
            style={TestStyles.input}
            placeholder="Enter task"
            value={taskInput}
            onChangeText={text => this.setState({ taskInput: text })}
          />
          <Button title="Add Task" onPress={this.saveTask} style={TestStyles.button} />
        </View>
        <FlatList
          data={tasks}
          renderItem={this.renderTaskItem}
          keyExtractor={item => item.id.toString()}
        />

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={TestStyles.button}> Go Back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
