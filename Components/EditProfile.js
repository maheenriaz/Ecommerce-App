
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import Header3 from './Header3'; 
import { AntDesign } from '@expo/vector-icons';
import {TextInput } from 'react-native-paper';

class EditProfile extends React.Component {
    state={
        color:'grey'
    }
  render(){
        return (
         <View style={{backgroundColor:'white'}}>            
             <Header3 navigation={this.props.navigation} />
             <View>
             <View style={{paddingTop:20,flexDirection:'column',alignSelf:'center'}} >
                  <Image style={{height:90,width:100,borderRadius:10,alignSelf:'center'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb1phD8wAM8I25Smypkcw0fq0zhhbFU3oW_A&usqp=CAU'}} />
                  <Text style={{fontSize:22,fontWeight:'bold',paddingLeft:7,marginTop:7}}>William Allen</Text>
            </View>

            <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row',alignSelf:'center'}}>
               <TextInput  underlineColor={'grey'}   theme={{ colors: { text: this.state.color } }}
                     placeholder='Enter Name' style={{width:300,height:40,backgroundColor:'white',
               alignSelf:'center'}}
             /> 
            </View>

            <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row',alignSelf:'center'}}>
               <TextInput          underlineColor={'grey'}   theme={{ colors: { text: this.state.color } }}
                     placeholder='Enter Phone Numer' style={{width:300,height:40,backgroundColor:'white',alignSelf:'center'}}
             /> 
            </View>

            <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row',alignSelf:'center'}}>
               <TextInput   theme={{ colors: { text: this.state.color } }} 
               underlineColor={'grey'} placeholder='Email' style={{width:300,height:40,backgroundColor:'white',alignSelf:'center'}}
               /> 
            </View>
            
            <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row',alignSelf:'center'}}>
               <TextInput       theme={{ colors: { text: this.state.color } }}    
                underlineColor={'grey'}
                     placeholder='Username' style={{width:300,height:40,backgroundColor:'white',alignSelf:'center'}}
               /> 
            </View>
            </View>
       
       <TouchableOpacity>
        <View style={{backgroundColor:'grey',width:200,height:40,borderWidth:1,borderColor:'grey',borderRadius:10,marginTop:30,alignSelf:'center'}}>
            <Text style={{alignSelf:'center',marginTop:10,color:'white'}}>Submit</Text>
       </View>
       </TouchableOpacity>

       <View style={{marginTop:140}}>

            </View>
        </View>
          );
    }
 
}
export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
