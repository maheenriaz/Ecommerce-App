import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput , KeyboardAvoidingView,RefreshControl,FlatList,
TouchableOpacity,AsyncStorage,Alert,ScrollView,Image} from 'react-native';
import Header from './Header'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import  firebase from '@firebase/app'
import  '@firebase/auth'
import "@firebase/firestore";
export default class Signup extends React.Component {
  state={
    username:'',
    refreshing:false,
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
 
  handleRefresh(){
    this.setState({refreshing:true},()=>{
      this.setState({refreshing:false})
    } ) 
  }
    render(){ 
      zoomVertical=[ 
       { varities:'Cotton',bgcolor:'black',color:'white'},
       { varities:'Silk'},
       { varities:'Sweater'},
       { varities:'Hoodies'},
       { varities:'Dupatta'},
       { varities:'Shorts'},
       { varities:'Skirt'},
    ];
    card1=[ 
      { pic:'https://cdn.sanaullastore.com/media/catalog/product/k/i/kid-s-pret-collection-by-waniya-wka20-04-_1_.jpg',description:'3 piece suit',price:'267.00',star:'4.5',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'], coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://www.stylesgap.com/wp-content/uploads/2020/02/Long-Casual-Kurtas-Latest-Summer-Lawn-Kurti-Designs-Stitching-Styles-Collection-2020-1.jpg',description:'Dupatta Shalwar',price:'342.00',star:'4.3',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['cotton','lawn','Banarsi','Rashmi','Ramako'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'http://www.mariab.ae/media/catalog/product/cache/1/thumbnail/800x1200/040ec09b1e35df139433887a97daa66f/m/k/mkd-242-blue.jpg',description:'Cotton Fabric',price:'874.00',star:'4.2',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhITExIVFRUXFRIYFxUSFxUXFRIVFRIWFxcRFRUYHSggGBolGxcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGislHh0tLSstLS0tKy0tLS0tLTctLS0tLS0tLS0tLSstLS0tKy0tLSstLS0tLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABBEAACAQIDBAYGBwcDBQAAAAAAAQIDEQQSIQUxQVEGEyJhcYEHMpGhscEjYnJzstHwFEKCkrPh8TRSoggzY5PS/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIhEBAQACAgICAgMAAAAAAAAAAAECEQMxEiFBUTJhBCJx/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAeKtSMU5SaSW9t2S8wPZW+kvSqGHvCNpVOPKPc+809sekLAQjONPE05VLNRtJZVLdrLdp4lDr4WpVWdSpyTu087ad97vFNP2k8cdo5Vi2v0iqVW3KbevB6LyISWK431+HIw7Vw1eDvONlzi04r2bvM0HULEFowHSGcdMzfjr8S39H+mDjUhGUm4SsmpXbTbtdN+XvOUKp3manjGpLXivcL77Jt+mou+qPpVfR/tz9ooZJPt07LxjwfyLUU2aq2AAOAAAAAAAAAAAAAAAAAAAAAAAAAcd9Pm1asXhsPGTVKcZzkl++1JJRfNLl3o7EaO1djYbEpRxFGnVSd0qkVLK+avuA/JUYSm8sbt8lq/YWvo9QrU1eGan3O+WX248fHejsnTPo9hqeBqQoUqdB3TUqUIxadmr6Lk2vM5TgMLODaUrq/fbwWpTyZWX1Wjh45lPcSUNodYmmsslvi/wAUXxj3+0gNpYHfKGn1eHly+Bv7ToVpuDjo4u6elzHKNV6SpyT+qk0++ybZfx80ynvtVycGWN/rPSudfZ2ej5M2MNka32fuM+19nyUVKdOSXBvT+5F0KTjrvj3fu+KJec32r8L9OtehuTdesuCpfGa/JnWjmXoVwvZxNTm6cU/DNJ/FHTTmXZAAEXQAAAAAAAAAAAAAAAAAAAAAAAAAAQPTGF6FuF0UiGGThbIlrv425p8GW7pltqjTUKUpK85Rv9VPRN+dvIps8FX6xuNVWvufD6trGbl/J6P8Sbx1vTJDA33o3cNsiCd7GfB05r13FvnFWRvqSRVpbctKr0k2fGtCSk1CEf3nZJW03vnc5vh6mSpKH7st3lufjY6ptbaXVXmleEVJvW2u+9/1vOVbT2uq+IlVUMvq6Xvqtd9teRPDanl1qX5dx9FKprBtQsn1knJLg3GNl4WLocX9GW3upqum/Ulb479/Kx2eMk0mtzNGGW4xZ46r6ACaAAAAAAAAAAAAAAAAAAAAAAAAD5J21ZXNqdI9XCirvjLl4IjPSFtuVOVKhF5VNwzyWrtKeVRSX60JDNCFONNUlkSWk4p309Zt72+ZXbcrqL+Pj6tc+6TYiKUpuEZVG9ZT7TfDS97eCNPoz0yTlTw9aMpVbNdZDK1JRi3mmrqzsraXu+CuXjbOy8PiYOLpxhK1o1KcYprulHdKPd8Co4DogsJecu3OWmdLsxX+2PLzKssLjPbVhjfKLLHaMHu96Mrbl4EfhcNdEhRVt5VNrMtTpV/SRierwclHfNxj4K6v+Xmckw82uB17pzTU4ZbXUUm1/Fe3uK7T6JR/ZpVEvX7Ue6NtLeJfxz0oywuV2h9i4m0otPc4+92ud66DbW66jlb7UPwvd+R+edmRlCUovfGS+N0dE6A7XdOrBrddxkly/wAWZzfjltXlj5Y6dnB8TvqfTQygAAAAAAAAAAAAAAAAAAAAAAeak1FXbsu8CmdKtkqpjsPUk/o6cVOSW+UoT+jgvF635RfM3622b6OEl4wmvkbWDmpVKld65ssYLhGMMyzLvblLytzNitVg95HGfP21YWTUs3pB9dTk9Gk+5r4GRW3OzXufc0beJwi5Jrk1dMj6mCino5Q+y3l/l3e477aZccoxzw9KM4xjOMZyTapOSzSS3uCbu0jHiqT08UiN2nh3GfW3vGKUpO9tKeaSut2l5Was1fyLLdTWqs/17yvLCXpHKZSqxjNkutVjF+rK7l9hPd56LzNuNWnWc6UYyioRi1mi4qcJOcVKN9bXhLyyvVNE7hqVk3azfPSyW5fMo2z51MNU6tRjmhHE0ktFGS6ynVhUklrJqEoq+mspbt7nhjqI+V8ppUuk2z1SqtLxPnRvaHVXf1l53djb25RqOblUeZyWr3cU7LkV7q2nNcOx7nw7/wAym+7XeWarv/RTbcasIwe+3Z8FwLGcY6JbRcMrvbVNf2OxYWspwjJbmkyfHnv19MnLhr3PllABaqAAAAAAAAAAAAAAAAAABHbdxk6VJyppOV0u1msubeVNlM2ptCdRRjKrdycY6aNZmlovM6G0nvKJtLCRji6cUrN1W2vqxXWqXho15op5pav4LJUxNKEYxj6sUkvBKyPlbWDfE9VVeJrTq5YN8t/gXNGMb2Cq56afcfK0TU2HP6NW3Xl7MzNyoIZTxysUvp9J9VSw8NKmKr0qKateMHJOc/CySf2i5U6a/X9iodWsRtVPfDB0fZXxF/hTSfjYuUdx1zdeZSS3rTu0IKpQpSxbtFZo0pXnxazRtC710Um/4ydqRurEDgqcoYjESlJtNxjFO1o2hG6Vkt/Z333b+CdOzfwrXS3CaJpcZfH8rFH2vh3CprulHT2nTeksE4L7Mn/xK500wC/ZsPU4rLfzjf5Ga91dnN4IHZuLcbW9VqO7g0lw4HZPR9tTraGVvWD9zOFYGs3Frit3d3fDzOieijGZcRKF9Jxfu/wcl1nGXKbwrrYANLIAAAAAAAAAAAAAAAAAACB2vgsS6manN5GrOKk04tcVZohNn7OqxrTqVs+bI1HO7tKTte/N2el9LIvJE7Zlql3fP/JC8c3tdx538dNZx7JG4yP0c13P4EnH1SN2npTqfZfwJtfH3Hno7FqhRT39XBvxcU38TNtvaNPD0Z1ajtGKu+b4KK722kvEyYSOVJckl7Ec89LG0ZTnh8HTd5SkpOPOUpZKa8LuXsQiPJl3km/RzmnQqYia7eIr1aj7knkjFdyyuxcovQjNkYGNGlTpR3QhGKfPKrOT729fMkoByTUYcVXUITm90YylbnZXsiOwcXLDxlK2aWabs7puUm7p8VZryseukmJUKO+KblBRcmorMnnSvzeWyXFm3VpKFJRS0jFRXhFWXwF6Jf7KftjE3eTi4yX89or4+41PSBVSp0aWm9N9ySsfYSUsTmfqx1/lb099ysdI8fKtWnU4drL3RWn68TNL3Wnl9RB4a8c1lpdX7lf+5e/R1K2NpP8A3Sdnpxpt2/XMpVHSUu+/x96Oh+jfASVejmVnFOflKGj96OXuM1mpf8ddABqYQAAAAAAAAAAAAAAAAAACE2k71H5fP8ybICvrVl4/JBbxdskFoRW132PFxXtkkTOQg+kO6K51KS9tSIbOG7yjdpcSqLorOW01jZyi6agnCN25qeVwScbWUUu0tb3Zaoq6Z4weGVOOVK1221ycndrwW7yCGU2zRRliYjKBDbf7VbDU7+tJu19+WUG1bjeCqrwb5EnjvUZpTwU54qNW9oU1bLvzScZK+7TScuPBaG/jI3jYVHHtznGvJCT4ulfzdiv04p0K0mtXKmkvNsnOlbcU0uGb8cbfi9xrbJwOeKhvvO7fPKtX7bLzMfzpuynlYhNh4HPGdSV8zllhFK+dvS3y7rHVOh7y1qLkrN0HTvznSkoZk+KkldFW2T0fr4eqo5IzhLSFZya6tNt2lDjK7tvs7LwLvW2PKpCKg9aalZPTNfLpfhpexOTLvTNyePjqrZOrFWu1qeyq7EwMVNOpUq5k9ISby377u7/W8tRdhlcpusOeMxuoAAmgAAAAAAAAAAAAAAAAFbhLV97bvfXV+4shWP3v1zC7h7b8Ydz9r/MgukMHeik7p1qd771aWbTnuJ6k9CB22262HX15P2Up/OwauHfmkKJ7mzHSPUmC9vKMyehhiZYhx8pUe0pXtpJNWWt8tnferZeG+/chi9zM9KIlRuEN6qk7b2V13W+Ecvild/LzREdHqdSEurlB5otWd96bk38vYX7EYJ8CNxXZlTVrNyav3ODfyRTlx+9xt48pl0mcBFSjla4fpEns2k46PXS1+L8SMwUiZwrLmDn+Wy4rkfQAygAAAAAAAAAAAAAAAAAAFVv234stRU16z8Qv4e6lKLNPbGHTdKfGMn7JRZtUHoecfG9N9zT96C7G6zjVpn2Z5pyPTVwsvbzFmaJiSMsWEazUXY2esRoTq2PGdsIXHbfk0yA28lnoL6717lTkTNLcaO1sPd0pf7ZO/wDFG1/al7TlWcF8c32g7Exs6pfQhZuyNzZLedHUeXHeNqeAAYQAAAAAAAAAAAAAAAAAACqPST8X8S1lWrL6Sf2n8Qu4e638PuPuKTyTX1ZfAxYadjcnHTuC23V2icO1Y9uSI/DyaVjNJuwacsfbZTPVzUpyNykghlNMUk2zZpUeZpTm0w8RK+5+z8weNTFKlfwPmKw0XBr9XWqNantPT1TBj6lVxi08vas+5NPVd/5hVMMvL6YY9pvkiT2VFZvBGjQppJJEvs2ja7CXPlrHTfAAYQAAAAAAAAAAAAAAAAAACs4pfSzX1mWYre0F9NPxXwC7h7ZacTPDFQWjkl4tcr/ArO0MVTrOMYqrNqWT6N5YuTyytdvXS2qi7KVz1g8FWu5U8Lluo615zv26OWXZusqXq280kS0syrYk7SkvrS+LPrqHiVFqbzK0r6pbk2k9DOqZBs9alY1UZnoVtdT4qZ6VNBHLTO5nxUrkDtPpZgcPdVMVTUlvhF9ZNeMIXa8ysY/0tUFdUMPVqvhKo1Sg+9etL2pHVNzmPy6ZQpRQ2vRU6E47no1z7MlLT2HDdo+kHaFa6VVUYvhQVnbk5yvLzVjL0E2hW/bILrJzdRNSdRubsouV7yvy952z0qnNPOWOs7Op1HKMXK6bSb42LZh8Oore34kNsOMnPXLaKvdJp35byfIzXwfyOTyyAAdZgAAAAAAAAAAAAAAAAAACt7ZX0r8I/AshqY3AQqb99t6CzjymOW6rWDxOTsqOVfVSSffZEjTx0+EGzQw0NdSYpxstDsjXncfpx/p36QatPF2wk6UoKnHPeKmlWU5qUVJNboqHncgo+k7aP/g/9Uv/ALIPpfQUMfjYrRLE17LknVk0vDUiYnGS8mX2teK9Iu05qyrRh93Sp/GaZX9p7cxddPrsRVqK3qyk8n8i7PuNZGWjs2tVhWnTpynClFSquKuoRcksz7vkm9ybRC55Xuo+PsNmnm4SMMYmeAcbNOpLufiWLoZtGNHF0pSTSbcXlV/XVk/bYrtMltgTaxFG3GpBeUnlfubJXow/KP0R0Xk5RnJ8cvle+nwJ00NiYfJSjzer+Xusb5XjNRPku8qAAkgAAAAAAAAAAAAAAAAAAAAAKRtPGSpVZwjDW7actzV9LczJSx2IlGEoVFvtKOVbmtLX7yw7X2RGulrlmt0t/Hc1xRAw2PiKGZ2U4b3lfLjZ/Ipy89/pu4+TCyb7/b8+dKMe6+LxNZxUXOrLSO7s9nN55bvvbI2JZ/SHs/D0sTGWGt1dWn1jSlmSnKc75eUXpZbt9uSrES2XcY85q2PTR+hvQ3sSNHZ0ZuKcsQ5VJXW+GsYRfNZVf+Nn56P1T0Lp5dn4KPLDYf8ApROoR+a+muxv2THYmglaMajcPu59qH/FpeRDwk+Op0j08YBwx1Orbs1aMbPnKnJqS9jh7Tm0WBs02TPRxXxWG+/o/wBSJCQJjo7/AKnD/fUf6iJD9TJH0Ai6AAAAAAAAAAAAAAAAAAAAAAAAGOv6svB/AAD8fS3y8V+FH1HwAez9Y9G/9JhfuKH9KIAcjm//AFBf9nB/e1PwI4lE+gOssSf6If6vDffUvxoAki/UIAIpAAAAAAAAAAA//9k=',description:'Pure Silk Hoddie',price:'333.00',star:'4.2',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://5.imimg.com/data5/CW/LT/MY-64503763/fspnt1011_blk_1-500x500.jpg',description:'Pent Cotton',price:'231.00',star:'4.0',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://www.stylesgap.com/wp-content/uploads/2016/05/Summer-Fashion-Lawn-Kurti-Designs-Trends-Latest-Collection-2018-2019-9.jpg',description:'Lawn Suit 2 piece',price:'431.00',star:'3.9',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://www.styleglow.com/wp-content/uploads/2018/05/Multi-COlor-Frock-For-Stitching.jpg',description:'2 Piece',price:'343.00',star:'3.7',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://ae01.alicdn.com/kf/Hf56dea7944344d84b74c12f1e9a5c005w/Vintage-Jhumka-Jhumki-Indian-Earrings-for-Women-Sliver-Color-Dangle-Long-Tassel-Earring-Statement-Afghan-Gypsy.jpg',description:'Jhumka',price:'340.00',star:'4.3',coordinate:{longitude:24.9322,latitude:67.0872},longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Fancy','Simple','Good','Design','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://www.theweddingbrigade.com/media/cache/4e/29/4e2975fac5548ecf208d8b40aeb73c19.jpg',description:'Jhumar',price:'211.00',star:'3.3',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
      { pic:'https://cfcdn19.candere.com/media/catalog/product/cache/1/image/1020x1020/9df78eab33525d08d6e5fb8d27136e95/c/0/c003302_1.jpg?v=1520507035',description:'Ring',price:'101.00',star:'4.2',longDes:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',category:['Lawn','cotton','Silk','Rashmi','Banarsi'],coordinate:{longitude:24.9322,latitude:67.0872}},
   ];
    return (
        <View  style={{backgroundColor:'white',flex:1}}>
          <Header />
    <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={()=> this.handleRefresh()}/>} >
          <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center',paddingStart:5,paddingEnd:5}}>
          { zoomVertical.map((data2,index)=>{
               return (
                 <View>
                   <TouchableOpacity style={{elevation:4}}>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'black',width:123,height:38,borderRadius:10,marginLeft:7,backgroundColor: data2.bgcolor}}>
                       <Text key={index} style={{alignSelf:'center',marginTop:8,color:data2.color}} >{data2.varities}</Text>
                    </View>
                    </TouchableOpacity>
                 </View>
               );
           })}
          </ScrollView>
           
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <Text style={{fontSize:14,paddingLeft:13,marginTop:10}}>120 products</Text>
                <Text style={{fontSize:14,fontWeight:'bold',marginTop:10,margin:10}}>Most Popular</Text>
            </View>

         <View style={{flexDirection:'row'}}>
         <FlatList 
              data={card1}
              keyExtractor={(item)=>item.id}   
              onRefresh={()=> this.handleRefresh()}
              refreshing={this.state.refreshing}
              numColumns={2}
               columnWrapperStyle={{justifyContent: 'space-around'}}
              renderItem={({item})=>{
                return(
                  <View >
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ItemDetails',{item})} >
                   <View style={{marginTop:20,elevation:4,backgroundColor:'white',height:250,width:170,justifyContent:'space-around'}}>
                  <Image style={{height:170,width:140,resizeMode:'cover',marginLeft:13,marginTop:10}} 
                  source={{uri: item.pic}} />
                    <View>   
                          <Text style={{marginLeft:10,color:'#6D6D6D',marginTop:10}}>{item.description}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>   
                          <View style={{flexDirection:'row'}}> 
                            <Feather style={{marginTop:10,paddingLeft:8}} name="dollar-sign" size={14} color="orange" />
                            <Text style={{marginLeft:10,color:'#6D6D6D',marginTop:10,marginLeft:3}}>{item.price}</Text>
                          </View>
                          <View style={{flexDirection:'row',marginLeft:40}}> 
                            <AntDesign name="star" size={14} color="orange" style={{marginTop:10,paddingLeft:8}}/>
                            <Text style={{marginLeft:10,color:'#6D6D6D',marginTop:10,marginLeft:3}}>{item.star}</Text>
                          </View>
                    </View>
                   </View>
                   </TouchableOpacity>
                 </View>
                );
              }}
          />
         </View>
          















            {/* <Text style={{marginTop:340,alignSelf:'center'}}>Welcome to home {this.state.username}</Text>
            <TouchableOpacity onPress={()=>this.userLogout()}>
            <View style={{borderWidth:1,borderRadius:20,backgroundColor:'#ffffff'
            ,width:280,height:40,alignSelf:'center',marginTop:10}}>
                  <Text  
                  style={{color:'black',alignSelf:'center',marginTop:7,fontSize:17}}>Logout</Text>
            </View>
            </TouchableOpacity> */}
            </ScrollView>
       </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
 
});
