
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import Constant  from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
class Header3 extends React.Component {
  render(){
        return (
         <View style={{justifyContent:'space-between',flexDirection:'row',marginTop: Constant.statusBarHeight,height:50,backgroundColor:'white'}}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}>
                  <View style={{flexDirection:'row'}}>
                    <AntDesign style={{marginTop:18,marginLeft:10}} name="back" size={20} color="black" />
                    <Text style={{marginTop:20,paddingLeft:10}}>Back</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',width:80,marginTop:10}}>
                     <Text style={{alignSelf:'center'}}>Edit Profile</Text>
                  </View>
              </View>
          );
    }
}
export default Header3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
