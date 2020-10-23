import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import OnBoardingScreen from './OnBoardingScreen'
import Login from './Login'
import Signup from './Signup'
import BeforeLogin from './BeforeLogin'
import Home from './Home'
import ItemDetails from './ItemDetails'
import Profile from './Profile'
import EditProfile from './EditProfile'


const OnBoardingScreenStackNavigator = createStackNavigator({
  OnBoardingScreen: {
        screen: OnBoardingScreen,
        navigationOptions: {
          headerShown: false,
        }},});
 const BeforeLoginStackNavigator = createStackNavigator({
  BeforeLogin: {
     screen: BeforeLogin,
      navigationOptions: {
     headerShown: false,
  }},});
  const ProfileStackNavigator = createStackNavigator({
    Profile: {
     screen: Profile,
      navigationOptions: {
     headerShown: false,
  }},
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }},
    Signup: {
      screen: Signup,
       navigationOptions: {
      headerShown: false,
   }},
  EditProfile: {
    screen: EditProfile,
     navigationOptions: {
    headerShown: false,
 }}});
 ProfileStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 0) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Login" || route.routeName === "Signup") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};
  const HomeStackNavigator = createStackNavigator({
    Home: {
     screen: Home,
      navigationOptions: {
     headerShown: false,
  }},
  ItemDetails: {
    screen: ItemDetails,
     navigationOptions: {
    headerShown: false,
   
 }}});
   
  const myswitch= createSwitchNavigator({
    BeforeLogin:BeforeLoginStackNavigator,
    Profile:ProfileStackNavigator,
    OnBoardingScreen:OnBoardingScreenStackNavigator,
    Home:HomeStackNavigator,
    
  })
export default MainNavigation=  createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: HomeStackNavigator,
        navigationOptions:{  
          tabBarLabel:'Home',
           
          tabBarIcon:({tintColor})=>(  
            <AntDesign name="home" size={24} color="black" />
          ) ,
          tabBarOptions: {
            style: { backgroundColor: 'grey',color: 'black'},
            activeTintColor: 'white',
          }
        }} ,
      Profile: {screen: ProfileStackNavigator,
        navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon:({tintColor})=>(  
            <Entypo name="user" size={24} color="black" />
          ) ,
          tabBarOptions: {
            style: { backgroundColor: 'white',color: 'black'},
            activeTintColor: 'white',
          }
        } ,
     
        Login: {screen: myswitch,
          navigationOptions:{  
            tabBarLabel:'Login',  
            tabBarIcon:({tintColor})=>(  
              <AntDesign name="user" size={24} color="black" />
            )  
          }  
        } ,
      
      },
       
    },
  )
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
