import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import firebase from "firebase/app";
import "firebase/database";

const DataFetch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Reference to the "items" node in your database
    const itemsRef = firebase.database().ref("BorrowItem/");

    // Listen for changes in the data
    const onValueChange = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of objects to an array of objects
        const itemsArray = Object.keys(data).map((itemId) => ({
          itemId,
          ...data[itemId],
        }));

        // Update the state with the fetched data
        setItems(itemsArray);
      }
    };

    // Attach the listener
    itemsRef.on("value", onValueChange);

    // Detach the listener when the component unmounts
    return () => itemsRef.off("value");
  }, []); // Run the effect once when the component mounts

  return (
    <View>
      <Text>Items:</Text>
      {items.map((item) => (
        <View key={item.itemId}>
          <Text>ItemId: {item.itemId}</Text>
          <Text>ItemName: {item.ItemName}</Text>
          <Text>ItemDescription: {item.ItemDescription}</Text>
          <Text>AvailableTime: {item.AvailableTime}</Text>
          <Text>Status: {item.Status}</Text>
        </View>
      ))}
    </View>
  );
};

export default DataFetch;
