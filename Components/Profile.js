
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView,TouchableOpacity,AsyncStorage} from 'react-native';
import 'react-native-gesture-handler';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import Header2 from './Header2';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import  firebase from '@firebase/app'
import  '@firebase/auth'
import "@firebase/firestore";
class Profile extends React.Component {
    state={
        username:''
    }
    userLogout(){
        firebase.auth().signOut()
        .then(()=>{
           AsyncStorage.removeItem('login',()=>{
              console.log("deleted")
           });
          this.props.navigation.navigate("Login")
        })
      }
      componentDidMount(){
        AsyncStorage.getItem('login').then(user=>{
          if(user){
            console.log(JSON.parse(user) )
            const currentuser=JSON.parse(user) 
            this.setState({username:currentuser.name})
          }
          else{
            console.log('no user')
          }
        })
      }
  render(){
        return (
         <View style={{backgroundColor:'white'}}>
            <Header2 navigation={this.props.navigation} /> 
            <ScrollView>
              <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row'}} >
                  <Image style={{height:90,width:100,borderRadius:90}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb1phD8wAM8I25Smypkcw0fq0zhhbFU3oW_A&usqp=CAU'}} />
                   <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:24,fontWeight:'bold',paddingLeft:14}}>William Keller</Text>
                        <Text style={{fontSize:14,paddingLeft:14,color:'grey'}}>@wallen </Text>
                   </View>
               </View> 

               <View style={{paddingTop:34,paddingLeft:30}}>
                   <View style={{flexDirection:'row'}}>
                       <Entypo name="location" size={14} color="black" />
                       <Text style={{fontSize:14,paddingLeft:14,color:'grey'}}>Karachi,Pakistan </Text>
                   </View>
                   <View style={{flexDirection:'row',paddingTop:4}}>
                       <AntDesign name="phone" size={14} color="black" />
                       <Text style={{fontSize:14,paddingLeft:14,color:'grey'}}>+923788374784</Text>
                   </View>
                   <View style={{flexDirection:'row',paddingTop:4}}>
                        <MaterialCommunityIcons name="email" size={14} color="black" />
                       <Text style={{fontSize:14,paddingLeft:14,color:'grey'}}>Karachi,Pakistan </Text>
                   </View>
                </View>
        
            <View style={{paddingTop:20,flexDirection:'row',width:'100%'}}>
                <View style={{borderWidth:1,borderColor:'#B6B3B3',width:'50%',height:80}}>
                   <Text style={{fontSize:28,paddingLeft:0,color:'grey',alignSelf:'center',paddingTop:8}}>$140.00</Text>
                   <Text style={{fontSize:14,paddingLeft:0,color:'grey',alignSelf:'center'}}>Wallet </Text>
                </View>
                 <View style={{borderWidth:1,borderColor:'#B6B3B3',width:'50%',height:80}}>
                   <Text style={{fontSize:28,color:'grey',alignSelf:'center',paddingTop:8}}>12</Text>
                   <Text style={{fontSize:14,paddingLeft:10,color:'grey',alignSelf:'center'}}>Order </Text>
                </View>
            </View>
        
        
            <View>
                <View style={{paddingTop:40,paddingLeft:20,flexDirection:'row'}}>
                    <AntDesign name="hearto" size={20} color="black" />
                    <Text style={{fontSize:16,paddingLeft:14,color:'grey'}}>Your Favourites</Text>
                </View>
                <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row'}}>
                    <MaterialIcons name="payment" size={20} color="black" />
                    <Text style={{fontSize:16,paddingLeft:14,color:'grey'}}>Payment</Text>
                </View>
                <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row'}}>
                    <FontAwesome name="share" size={20} color="black" />
                    <Text style={{fontSize:16,paddingLeft:14,color:'grey'}}>Tell Your Friend</Text>
                </View>
                {/* <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row'}}>
                    <SimpleLineIcons name="support" size={22} color="black" />
                    <Text style={{fontSize:19,paddingLeft:14,color:'grey'}}>Support</Text>
                </View> */}
                <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row'}}>
                    <Feather name="settings" size={20} color="black" />
                    <Text style={{fontSize:16,paddingLeft:14,color:'grey'}}>Setting</Text>
                </View>
                <TouchableOpacity >
                <View style={{paddingTop:20,paddingLeft:20,flexDirection:'row'}}>
                   <AntDesign name="logout" size={20} color="black" />
                    <Text onPress={()=>this.userLogout()} style={{fontSize:16,paddingLeft:14,color:'grey'}}>Logout</Text>
                </View>
                </TouchableOpacity>
            </View>
        
        <View style={{marginTop:100}}>

            </View>
        </ScrollView>
         </View>
          );
    }
 
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
