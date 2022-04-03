import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // states to add goals to list
  const [goals, setGoals] = useState([]);

  // to add goal to list and accept a value from child state
  function addGoalHandler(enteredGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* pass a function to child as a prop */}
      <GoalInput onAddGoal={addGoalHandler} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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
