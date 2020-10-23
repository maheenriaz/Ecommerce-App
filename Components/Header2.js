
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import Constant  from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
class Header2 extends React.Component {
  render(){
        return (
         <View style={{justifyContent:'space-between',flexDirection:'row',marginTop: Constant.statusBarHeight,height:50,backgroundColor:'white'}}>
           <View>
             <AntDesign style={{marginTop:18,marginLeft:10}} name="bars" size={24} color="black" />
            </View>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('EditProfile')}>
                  <View style={{flexDirection:'row',justifyContent:'space-around',width:80,marginTop:19}}>
                    <FontAwesome5 name="user-check" size={18} color="black" />
                  </View>
              </TouchableOpacity>
             </View>
            
           
          );
    }
 
}
export default Header2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
