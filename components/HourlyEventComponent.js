import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EventComponent from "./EventComponent";

const HourlyEventComponent = ({
  time = 1,
  data = [],
  onPressEvent = () => {},
}) => {
  return (
    <View style={styles.hourContainer}>
      <View style={styles.hourTextContainer}>
        <Text style={styles.hourText}>
          {time > 11
            ? time > 12
              ? (time % 12) + " pm"
              : "12 pm"
            : time == 0
            ? "12 am"
            : time + " am"}
        </Text>
      </View>
      <View style={styles.eventsContainer}>
        {data.map((c, i) => {
          if (
            (c.startingHour === time ||
              c.endingHour === time ||
              (c.startingHour < time && c.endingHour > time)) &&
            c.state === "incomplete"
          )
            return (
              <EventComponent
                title={c.title}
                details={c.details}
                detailsColor={c.detailsColor}
                titleColor={c.titleColor}
                eventBgColor={c.bg}
                key={i}
                onPress={() => onPressEvent(i)}
              />
            );
        })}
      </View>
    </View>
  );
};

export default HourlyEventComponent;

const styles = StyleSheet.create({
  hourContainer: {
    width: "100%",
    flexDirection: "row",
  },
  hourTextContainer: {
    flex: 0.5,
    marginRight: 5,
  },
  hourText: {
    alignSelf: "center",
    fontSize: 16,
    color: "lightgray",
    textTransform: "uppercase",
  },
  eventsContainer: {
    minHeight: 60,
    flex: 2.5,
    borderTopWidth: 0.8,
    borderColor: "lightgray",
  },
});
