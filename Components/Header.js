
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import 'react-native-gesture-handler';
import Constant  from 'expo-constants';
import { FontAwesome,FontAwesome5} from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
class Header extends React.Component {
  render(){
        return (
         <View >
            <View style={{justifyContent:'space-between',flexDirection:'row',marginTop: Constant.statusBarHeight,height:50,backgroundColor:'white'}}>
           <View>
               <Text style={{fontSize:23,fontWeight:'bold',marginTop:18,marginLeft:10}}>Garments</Text>
            </View>
             <View style={{flexDirection:'row',justifyContent:'space-around',width:80,marginTop:19}}>
                  <Octicons name="settings" size={24} color="black" />
               </View>
             </View>
            
             </View>
          );
    }
 
}
export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
