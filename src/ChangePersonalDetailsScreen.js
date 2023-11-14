// ChangeDetailsScreen.js
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const ChangePersonalDetailsScreen = () => {
  const [name, setName] = useState('John Doe'); // Initialize with user's current details
  const [email, setEmail] = useState('john@example.com');
  const [address, setAddress] = useState('123 Main Street');

  const handleSaveChanges = () => {
    // Perform logic to save changes, e.g., send updates to the server
    console.log('Changes saved!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Personal Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default ChangePersonalDetailsScreen;
