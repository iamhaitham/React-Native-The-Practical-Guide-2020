import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {"id":Math.random().toString(),"value":enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button 
          title="ADD" 
          onPress={addGoalHandler} 
        />
      </View>
      <FlatList 
        data={courseGoals} 
        keyExtractor={(item,index)=>item.id}
        renderItem={({item})=> <View style={styles.listItem}><Text>{item.value}</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem:{
    padding:10,
    marginVertical:10,
    backgroundColor:"#cccccc",
    borderColor:"black",
    borderWidth:1
  }
});
