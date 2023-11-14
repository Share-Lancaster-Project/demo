import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const ChangePaymentMethodScreen = ({ navigation }) => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleChangePaymentMethod = () => {     
    // Add logic for changing payment method
    // You may want to add validation, error handling, and API calls here
    alert('Payment method changed successfully!');
    // Navigate back or to a different screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        keyboardType="numeric"
        value={creditCardNumber}
        onChangeText={setCreditCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date (MM/YY)"
        value={expirationDate}
        onChangeText={setExpirationDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={setCVV}
      />
      <Button title="Change Payment Method" onPress={handleChangePaymentMethod} />
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

export default ChangePaymentMethodScreen;
