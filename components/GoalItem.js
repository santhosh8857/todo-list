import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    // bind is used to pre-configure a function which to be called..
    // !! LEARN BIND !!
    <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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