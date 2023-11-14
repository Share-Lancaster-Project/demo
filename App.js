// import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import createBot
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import AddAnItemToListScreen from './src/AddAnItemToListScreen';
import AvailableScreen from './src/AvailableScreen';
import ChangePasswordScreen from './src/ChangePasswordScreen';
import ChangePaymentMethodScreen from './src/ChangePaymentMethodScreen';
import ChangePersonalDetailsScreen from './src/ChangePersonalDetailsScreen';
import CurrentlyBorrowingScreen from './src/CurrentlyBorrowingScreen';
import CurrentlyTakenScreen from './src/CurrentlyTakenScreen';
import FirstTimePaymentScreen from './src/FirstTimePaymentScreen';
import ItemDetailsScreen from './src/ItemDetailsScreen';
import ItemsAvailableScreen from './src/ItemsAvailableScreen';
import ItemsListScreen from './src/ItemsListScreen';
import LoginScreen from './src/LoginScreen';
import NotificationsScreen from './src/NotificationsScreen';
import OpeningPage from './src/OpeningPage';
import ReturnItemsScreen from './src/ReturnItemsScreen';
import SettingsScreen from './src/SettingsScreen';
import SignOutScreen from './src/SignOutScreen';
import SignUpScreen from './src/SignUpScreen';

const HomeTabs = createMaterialTopTabNavigator();

const MyTopTab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();



const TabScreen = () => {

 return (


      <Tab.Navigator
       screenOptions={{
        headerTitle: '',
        headerStyle: { height: 0,  backgroundColor: 'lightblue' , },
        tabBarStyle: { backgroundColor: 'lightblue' }, // Set the background color for the tab bar
        tabBarActiveTintColor: 'white', // Set the text color for the active tab
        tabBarInactiveTintColor: 'gray', // Set the text color for inactive tabs
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTitle: '',
        headerStyle: { height: 0 }, // set header height to 0
      }} />
      <Tab.Screen name="MyFeed" component={MyFeedScreen} options={{
        headerTitle: '',
        headerStyle: { height: 0 }, // set header height to 0
      }} />
      <Tab.Screen name="Requests" component={RequestScreen} options={{
        headerTitle: '',
        headerStyle: { height: 0 }, // set header height to 0
      }} />
    </Tab.Navigator>
    
  );
};



const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Your other components */}
      <SearchBar
        placeholder="Search..."
        containerStyle={{ backgroundColor: 'white' }}
        inputContainerStyle={{ backgroundColor: 'white', height: 35 }}
        inputStyle={{ color: 'black' }}
      />
      <HomeTabs.Navigator>
        <HomeTabs.Screen name="Items To Borrow" component={ItemsAvailableScreen} />
        <HomeTabs.Screen name="Currently Borrowing" component={CurrentlyBorrowingScreen} />
      </HomeTabs.Navigator>
    </View>
  );
};


const ItemRequestScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text></Text>
  </View>
);

const YourRequestsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text></Text>
  </View>
);


const MyFeedScreen = () => {

  const MyTopTab = createMaterialTopTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Icon */}
      <NavigationContainer independent={true}></NavigationContainer>
      <NavigationContainer independent={true}>
        <MyTopTab.Navigator>
          <MyTopTab.Screen name="Available" component={AvailableScreen} />
          <MyTopTab.Screen name="Currently Taken" component={CurrentlyTakenScreen} />
        </MyTopTab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const RequestTabs = createMaterialTopTabNavigator();

const RequestScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Icon */}
      <NavigationContainer independent={true}></NavigationContainer>
    <NavigationContainer independent={true}>
      <RequestTabs.Navigator>
        <RequestTabs.Screen name="Items Requested" component={ItemRequestScreen} />
        <RequestTabs.Screen name="Your Requests" component={YourRequestsScreen} />
      </RequestTabs.Navigator>
    </NavigationContainer>
    </View>
  
  );
};


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningPage">
        <Stack.Screen name="OpeningPage" component={OpeningPage} options={{ title: 'Opening Page' , headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Sign Up' , headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, headerTitle: '', headerBackTitle: null, headerLeft: null}} />
        <Stack.Screen name="ItemsListScreen" component={ItemsListScreen} options={{ headerShown: false, headerTitle: '', headerBackTitle: null, headerLeft: null}} />
        <Stack.Screen name="AddAnItemToListScreen" component={AddAnItemToListScreen} options={{ title: 'Add Item To Lend' }} />
        <Stack.Screen name="ItemsAvailableScreen" component={ItemsAvailableScreen} />
        <Stack.Screen name="CurrentlyBorrowingScreen" component={CurrentlyBorrowingScreen} />
        <Stack.Screen name="AvailableScreen" component={AvailableScreen} />
        <Stack.Screen name="CurrentlyTakenScreen" component={CurrentlyTakenScreen} />
        
        <Stack.Screen name= "TabScreen" component={TabScreen} options={({ navigation}) => ({
           headerTitle: '', headerStyle: {backgroundColor: 'lightblue'} , headerLeft: null, flexDirection: 'row', headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.navigate('AddAnItemToListScreen')}>
            <View style={{ paddingRight: 100 }}>
            <Icon name='add' type='ionicon' size={30} />
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
            <View style={{ paddingRight: 10 }}>
            <FontAwesome name="bell" size={30} color="black" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
            <View style={{ paddingRight: 10 }}>
            <Icon name='settings' type='ionicon' size={30} />
            </View>
            </TouchableOpacity>

            </View>
          ),

        })}
      />
     <Stack.Screen name="SettingsScreen" component={SettingsScreen} options= {{ headerTitle: "Settings" }} />
    <Stack.Screen name="ChangePersonalDetailsScreen" component={ChangePersonalDetailsScreen} options={{ title: 'Edit Details' }} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ title: 'Change Password' }} />
    <Stack.Screen name="ChangePaymentMethodScreen" component={ChangePaymentMethodScreen} options={{ title: 'Change Payment Method' }} />
    <Stack.Screen name="SignOutScreen" component={SignOutScreen} options={{ title: 'Sign Out' }} />
    <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} options={{title: 'Borrow Item?'}} />
    <Stack.Screen name="ReturnItemsScreen" component={ReturnItemsScreen} options={{title: 'Return Item?'}} />
    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{title: 'Notifications'}} />
    <Stack.Screen name="FirstTimePaymentScreen" component={FirstTimePaymentScreen} options={{title: 'Enter Payment Method'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


