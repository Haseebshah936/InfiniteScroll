import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const EventComponent = ({
  title = "Appointment title",
  details = "Person",
  eventBgColor = "tomato",
  titleColor = "white",
  detailsColor = "white",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.eventContianer, { backgroundColor: eventBgColor }]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={[styles.eventTitle, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.eventDetails, { color: detailsColor }]}>
        {details}
      </Text>
    </TouchableOpacity>
  );
};

export default EventComponent;

const styles = StyleSheet.create({
  eventContianer: {
    minHeight: 80,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 4,
    marginBottom: 1,
  },
  eventTitle: {
    fontWeight: "bold",
  },
  eventDetails: {
    color: "white",
  },
});
