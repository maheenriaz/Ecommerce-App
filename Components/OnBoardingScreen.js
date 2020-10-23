import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip=({... props})=>{
    <TouchableOpacity style={{marginHorizontal:9}}>
    <Button 
    title='Skip'
    color='#000000' 
    {... props} />
    </TouchableOpacity>
}
const Next=({... props})=>{
    <TouchableOpacity style={{marginHorizontal:9}}>
    <Button 
    title='Next'
    color='#000000'
    {... props}  />
    </TouchableOpacity>
}
const Done=({... props})=>{
    <TouchableOpacity style={{marginHorizontal:9}} {... props}>
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
}
const Dot =({selected})=>{
    let backgroundColor;
    backgroundColor= selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return(
        <View style={{width:5,height:5,marginHorizontal:3,backgroundColor}}></View>
    )
}
export default class OnBoardingScreen extends React.Component {
    render(){ 
    return (
        <Onboarding
        onSkip={()=> this.props.navigation.navigate('BeforeLogin')}
        onDone={()=> this.props.navigation.navigate('BeforeLogin')}
        SkipButtonComponent={this.Skip}
        NextButtonComponent={this.Next}
        DoneButtonComponent={this.Done}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Welcome⭐',
            subtitle: 'Thankyou For Installing',
          },
          {
            backgroundColor: '#fd3b93',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Get Notified 🔔',
            subtitle: 'Swipe Up ➡️',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Agree To The Terms And Conditions',
            subtitle: 'Swipe Up ➡️',
          },
        ]}
      />
  );
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
