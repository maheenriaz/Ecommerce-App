import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput , KeyboardAvoidingView, TouchableOpacity, AsyncStorage,Alert} from 'react-native';
import  firebase from '@firebase/app'
import  '@firebase/auth'
import "@firebase/firestore";

export default class Login extends React.Component {
  state={
    email:'',
    password:'',
   }
 
   userLogin(email,password){
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(user)=>{
        firebase.firestore().collection("users").doc(user.user.uid)
        .get().then(async(doc)=>{
          // console.log(doc.data().details,'sdfsfdfsdddffsdsd')
         const item=JSON.stringify(doc.data().details)
         await AsyncStorage.setItem('login',item)
         this.props.navigation.navigate("Home", {item})     
        })
        .catch(err=>{
          console.log(err.message)
        })
        }) 
        .catch((err)=>{
            Alert.alert(err.message)
        })
   }
    render(){ 
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage} >
              <Text style={{fontSize:40,marginTop:130,
              alignSelf:'center',color:'white',fontWeight:'bold'}} 
              >L O G I N</Text>
              <KeyboardAvoidingView behavior='padding'>
               <TextInput style={{width:260,height:40,padding:10,color:'white',opacity:2,fontWeight:'bold',
               borderWidth:2,borderColor:'#4A494B',alignSelf:'center',marginTop:30,borderRadius:10}}
                placeholder='Email or Username' value={this.state.email} onChangeText={(text)=> this.setState({email:text})}/>
                 <TextInput style={{width:260,height:40,padding:10,color:'white',opacity:2,fontWeight:'bold',
               borderWidth:2,borderColor:'#4A494B',alignSelf:'center',marginTop:30,borderRadius:10}}
                placeholder='Email or Password' value={this.state.password} onChangeText={(text)=> this.setState({password:text})} />

              <TouchableOpacity onPress={()=>this.userLogin(this.state.email,this.state.password)}>
                    <View style={{borderWidth:1,borderRadius:20,backgroundColor:'#ffffff'
                    ,width:280,height:40,alignSelf:'center',marginTop:30}}>
                      <Text  
                      style={{color:'black',alignSelf:'center',marginTop:7,fontSize:17}}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
                <Text style={{color:'black',fontWeight:'bold'}}>Forgot Password |</Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup')}>  
                  <Text style={{color:'black',fontWeight:'bold'}}>New here ? Signup </Text>
                  </TouchableOpacity>
                  </View>
               </KeyboardAvoidingView>
              </ImageBackground>
 </View>
  );}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba( 0, 0, 0, 4)'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    opacity:0.7
  }
});
