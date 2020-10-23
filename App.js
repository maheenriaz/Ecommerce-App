import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OnBoardingScreen from './Components/OnBoardingScreen'
import Login from './Components/Login'
import Signup from './Components/Signup'
import MainNavigation from './Components/Navigation'
import BeforeLogin from './Components/BeforeLogin'
import Home from './Components/Home'
import ItemDetails from './Components/ItemDetails'
import Header from './Components/Header'
import Profile from './Components/Profile'
import EditProfile from './Components/EditProfile'


export default class App extends React.Component {
  state={
    isFirstLaunch: null,
    setisFirstLaunch: null
  }
  componentDidMount(){
    AsyncStorage.setItem('alreadyLaunched').then(value=>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true')
        this.setState({setisFirstLaunch: true})
      }
      else{
        this.setState({setisFirstLaunch: false})
      }
    })
  }

render(){ 
   if(this.state.setisFirstLaunch == true)
    {
      return  <OnBoardingScreen />
    }
    else{
     return  <MainNavigation />
    }
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
