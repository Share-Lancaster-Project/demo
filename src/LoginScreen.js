// LoginScreen.js
import { default as React, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const LoginScreen = ({ navigation }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');


        const handleLogin = () => {
            // perform actions like form validation and user registration
            // after successful sign-up, navigate to the Home screen
            navigation.navigate('TabScreen');
        };


return (
    <View style={stylesLogin.container}>
      <Text style={stylesLogin.title}>Login To Your Account On SHARE!</Text>
      <TextInput style={stylesLogin.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={stylesLogin.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title = "Login." onPress={handleLogin} />
    </View>
    );
};

  const stylesLogin = StyleSheet.create({
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
});


export default LoginScreen;
