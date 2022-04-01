import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  // states to get goals and add goals to list
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  //to get the entered goal
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  // to add goal to list
  function addGoalHandler() {
    setGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});

// The borderRadius will have no effect in IOS to the Text element
// Assignin the styling to View element to affect all the platforms
// ---------------- //
// Unlike CSS the cascading will not have a effect to the child elements.

//-- Flat list vs Scroll view --//
// Scroll view renders all the items even though the user is not scrolling to the bottom
// Flatlist only renders the list which are visible to the user and vast majority of the items will not get rendered

// Flatlist
/* 
-> remove map
-> add two imp props
   -> data={array/list}
   -> renderItem={function}

   (Optional) -> keyExtractor = {(item, index) => return item,id}

-> the flatlist always gives an object
*/
