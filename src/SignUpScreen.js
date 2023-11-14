import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, confirmPassword] = useState('');
  const [name, fullname] = useState('');
  const [birthday, DOB] = useState('');
  const [address, setAddress] = useState('');
  const [checked, setChecked] = useState(false);
  const [addressOptions, setAddressOptions] = useState(['BaseCamp Leipzig', 'BaseCamp Potsdam', 'Other...']);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleSignUp = () => {
    // perform actions like form validation and user registration
    // after a successful sign-up, navigate to the Home screen
    navigation.navigate('TabScreen');
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const CustomCheckbox = () => {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
      setChecked(!checked);
    };

    return (
      <TouchableOpacity onPress={toggleCheckbox}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 90 }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: checked ? '#000' : 'transparent',
              marginRight: 8,
            }}
          >
            {checked && <Text style={{ color: '#FFF' }}>✓</Text>}
          </View>
          <Text style={{ alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', width: 220 }}>
            Agree to Terms and Conditions?
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up For An Account With SHARE!</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={fullname}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confPassword}
        onChangeText={confirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Date Of Birth"
        value={birthday}
        onChangeText={DOB}
        secureTextEntry
      />
      <View style={styles.dropdownContainer}>
      <ModalDropdown
        options={addressOptions}
        defaultValue="Select Address"
        onSelect={(index, value) => setSelectedAddress(value)}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownOptions} // Added dropdownOptions style
        dropdownTextStyle={styles.dropdownOptionText} // Added dropdownOptionText style
        onDropdownWillShow={() => setAddressOptions(['BaseCamp Leipzig', 'BaseCamp Potsdam', 'Other...'])}
        renderSeparator={() => (
          <View style={{ height: 1, backgroundColor: 'gray' }} />
        )}
      />
      </View>
      <CustomCheckbox />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Have an account? Log in." onPress={navigateToLogin} />
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
    textAlign: 'center',
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
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dropdown: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownOptions: {
    borderRadius: 5,
    marginTop: 5,
    maxHeight: 122,
    width: 320
  },
  dropdownOptionText: {
    fontSize: 16,
    padding: 10,
  },
});

export default SignUpScreen;
