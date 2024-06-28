import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>NC News</Text>
      {/* Additional components or styles here */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFDAB9",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CustomHeader;
