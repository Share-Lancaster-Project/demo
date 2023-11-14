import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ReturnItemsScreen = ({ route, navigation }) => {
  // Extract item details from the route parameters
  const { itemId, itemName, itemDescription, itemPrice } = route.params || {};

  // Function to handle returning the item
  const handleReturnItem = () => {
    // Add logic to handle returning the item
    // You can navigate to a confirmation screen or perform other actions
    alert(`Returning ${itemName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Return Item Details</Text>
      <Text style={styles.detail}>{itemId}</Text>
      <Text style={styles.detail}>{itemName}</Text>
      <Text style={styles.detail}>{itemDescription}</Text>
      <Text style={styles.detail}>{itemPrice}</Text>
      <Button title="Return Item" onPress={handleReturnItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ReturnItemsScreen;
