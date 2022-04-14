import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HourlyEventComponent from "./components/HourlyEventComponent";
import HourlyEvents from "./components/HourlyEvents";

export default function App() {
  // The task starting time and ending must be in 24 hour formatt.
  // For different colors you can use color randomization. Like the one below at the time of task creation.
  // You can also use color randomization for text color as well.
  // The default text color is white. And the default color for a task is tomato.

  const index = Math.floor(Math.random() * 2);
  const color = [
    `#1B${Math.floor(Math.random() * 10)}5BC`,
    `#E1${Math.floor(Math.random() * 10)}D30`,
  ];

  const [data, setData] = useState([
    {
      title: "Appointment With Haseeb",
      details: "I just have to ellaborate some task will not take much time.",
      bg: color[1],
      state: "incomplete",
      startingHour: 11,
      startingMinutes: 30,
      endingHour: 12,
      endingMinutes: 50,
      titleColor: "black",
      detailsColor: "white",
    },
    {
      title: "Appointment With Zainab",
      details: "I just have to show some task progress.",
      bg: color[1],
      state: "incomplete",
      startingHour: 11,
      startingMinutes: 30,
      endingHour: 12,
      endingMinutes: 50,
    },
    {
      title: "Appointment With Mr Zain",
      details: "I have too be carefull as he is my boss.",
      startingHour: 9,
      startingMinutes: 30,
      endingHour: 15,
      endingMinutes: 30,
      state: "incomplete",
      bg: color[0],
    },
  ]);

  const handleEventCompltion = (index) => {
    alert(`${data[index].title} Completed Successfully`);
    let d = [...data];
    d[index].state = "complete";
    setData(d);
  };
  return (
    <View style={styles.container}>
      <HourlyEvents data={data} onPressEvent={handleEventCompltion} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
});
