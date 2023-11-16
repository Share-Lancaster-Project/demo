import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { getDatabase, ref, push } from "@firebase/database";
// import { getDatabase, ref, child, get } from "firebase/database";
// import { FIREBASE_AUTH } from "../firebaseConfig";

const FirstTimePaymentScreen = ({ route, navigation }) => {
  const { name, description, price, duration, status } = route.params || {};
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleChangePaymentMethod = async ({ route, navigation }) => {
    const auth = FIREBASE_AUTH;
    // Extract item details from the route parameters

    // Add logic for changing payment method
    console.log(name, duration, price, status, description);
    // You may want to add validation, error handling, and API calls here
    try {
      const db = getDatabase();
      push(ref(db, `users/${auth.currentUser.uid}/currentBorrow/`), {
        // id:
        name: name,
        description: description,
        price: price,
        duration: duration,
        status: "unavailable",

        // profile_picture: imageUrl,
      }).then((snapshot) => {
        ref.child(snapshot.key).update({ id: snapshot.key });
      });
      console.log("mmmmm");
      // navigation.navigate("TabScreen");
    } catch (err) {
      alert(err);
    }
    alert("Payment method changed successfully!");
    navigation.navigate("TabScreen");
    // Navigate back or to a different screen
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Payment Method</Text>
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
      <Button
        title="Enter Payment Method"
        onPress={handleChangePaymentMethod}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default FirstTimePaymentScreen;
