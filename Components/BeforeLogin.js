import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity,AsyncStorage} from 'react-native';
import Constant  from 'expo-constants';

export default class BeforeLogin extends React.Component {
  componentDidMount(){
    AsyncStorage.getItem('login').then((userid) => {
      if(userid || userid != null){
       this.props.navigation.navigate("Home")
       }
      else{
        this.props.navigation.navigate("Login")
      }
  })}
    render(){ 
    return (
        <View style={styles.container}>
          <Text style={{fontSize:30,marginTop:Constant.statusBarHeight,
            alignSelf:'center',color:'purple',fontWeight:'bold'}}>Online Shopping</Text>
            <Text style={{fontSize:17,marginTop:3,
            alignSelf:'center',color:'purple'}}> Win amazing vouchers and giveaways!
            </Text>
            <ImageBackground style={{width:'100%',height:320,marginTop:Constant.statusBarHeight}}
                    resizeMode='stretch' 
                    source={require('../assets/beforelogin.png')} />
              <Text style={{fontSize:20,marginTop:30,
            alignSelf:'center',color:'purple',fontWeight:'bold'}} 
            >Do Smart Shopping</Text>
        
          <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Signup')}>
            <View style={{borderWidth:1,borderRadius:20,backgroundColor:'#5D3B71'
            ,width:280,height:40,alignSelf:'center',marginTop:10}}>
              <Text style={{color:'white',alignSelf:'center',marginTop:7,fontSize:17}}>Create Account</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
            <View style={{borderWidth:1,borderRadius:20,backgroundColor:'#ffffff'
            ,width:280,height:40,alignSelf:'center',marginTop:10}}>
              <Text  
              style={{color:'black',alignSelf:'center',marginTop:7,fontSize:17}}>Login</Text>
            </View>
            </TouchableOpacity>
        </View>
  );}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:10
  },
});
