import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // state to control modal
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // states to add goals to list
  const [goals, setGoals] = useState([]);

  // to add goal to list and accept a value from child state
  function addGoalHandler(enteredGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  // functions to alter the state of modal visibility
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* Button to control modal */}
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />
        {/* pass a function to child as a prop */}

        {modalIsVisible && (
          <GoalInput
            showModal={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalContainer: {
    flex: 5,
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

// 311b6b
