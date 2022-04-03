import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    // bind is used to pre-configure a function which to be called..
    // !! LEARN BIND !!
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        // to have this riffle effect in IOS platform we can pass a function to style props and give pressed object as a parameter

        // use either Object destructuring or pass directy
        // style={(pressedValue)=> pressedValue.pressed && styles.pressedItem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.9,
  },
});
