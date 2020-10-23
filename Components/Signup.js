import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput , KeyboardAvoidingView, TouchableOpacity,Alert,ActivityIndicator,AsyncStorage} from 'react-native';
import firebaseConfig from '../config'
import  firebase from '@firebase/app'
import  '@firebase/auth'
import "@firebase/firestore";
firebase.initializeApp(firebaseConfig);

export default class Signup extends React.Component {
  state={
    email:'',
    password:'',
    name:'',
    loading:false
  }
  userSignup(email,password){
    console.log(this.state)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async(user)=>{
      this.setState({loading: true})
       let details = {}
        details.email = email
        details.uid = user.user.uid
        details.name = this.state.name
          firebase.firestore().collection("users").doc(user.user.uid)
          .set({
           details
          })                                                                  
          .then((data)=>{
             this.setState({loading: false})
            Alert.alert('Your Account has been created!!')
              this.props.navigation.navigate("Login")
          })
          .catch((err)=>{
            console.log(err.message)
          })
    } ) 
     .catch((err)=>{
        Alert.alert(err.message)
    })
}
    render(){ 
      if(this.state.loading == true){
        return <ActivityIndicator size='large' color='black' style={{marginTop:340}}></ActivityIndicator>
      }
      else{
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage} >
              <Text style={{fontSize:40,marginTop:130,
              alignSelf:'center',color:'white',fontWeight:'bold'}} 
              >S I G I N U P</Text>
              <KeyboardAvoidingView behavior='padding'>
               <TextInput style={{width:260,height:40,padding:10,color:'white',opacity:2,fontWeight:'bold',
               borderWidth:2,borderColor:'#4A494B',alignSelf:'center',marginTop:30,borderRadius:10}}
                placeholder='Email or Username' value={this.state.email} onChangeText={(text)=> this.setState({email:text})} />
                 <TextInput style={{width:260,height:40,padding:10,color:'white',opacity:2,fontWeight:'bold',
               borderWidth:2,borderColor:'#4A494B',alignSelf:'center',marginTop:30,borderRadius:10}}
                placeholder='Password' value={this.state.password} onChangeText={(text)=> this.setState({password:text})}/>
                <TextInput style={{width:260,height:40,padding:10,color:'white',opacity:2,fontWeight:'bold',
               borderWidth:2,borderColor:'#4A494B',alignSelf:'center',marginTop:30,borderRadius:10}}
                placeholder='Your Name' value={this.state.name} onChangeText={(text)=> this.setState({name:text})}/>

              <TouchableOpacity onPress={()=> this.userSignup(this.state.email,this.state.password)}>
                    <View style={{borderWidth:1,borderRadius:20,backgroundColor:'#ffffff'
                    ,width:280,height:40,alignSelf:'center',marginTop:30}}>
                      <Text  
                      style={{color:'black',alignSelf:'center',marginTop:7,fontSize:17}}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
                <Text style={{color:'black',fontWeight:'bold'}}>Already have an account ? | </Text>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>  
                  <Text style={{color:'black',fontWeight:'bold'}}>Signup </Text>
                  </TouchableOpacity>
                  </View>
               </KeyboardAvoidingView>
              </ImageBackground>
   </View>
  );}
}
}
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
