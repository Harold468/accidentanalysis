import React from 'react'
import { View,
    Text,
     TouchableOpacity,
    Image, 
    Dimensions} from 'react-native/'
import { Globalstyles } from '../globalstyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const {width,height}=Dimensions.get("screen")
export default function Homepage({navigation}) {
  return (
    <View style={Globalstyles.container}>

        <View style={{bottom:'15%',
        width:width/1.15,display:'flex',
        flexDirection:'row',justifyContent:'space-between',
        marginHorizontal:'50%'}}>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('ASM')}
        style={{display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow:'hidden',
        flexWrap:'wrap',width:'45%',
        alignItems:'center'}}>

            <Image 
            source={require('../assets/asm.png')}
            style={{width:width/2.5,height:180,resizeMode:'contain'}}
            />

            <Text style={{
            backgroundColor:'#2A84F2',
            color:'white',
            marginVertical:5,
            fontWeight:'bold',fontSize:16,
            padding:5,
            bottom:'10%',
            borderRadius:6,overflow:'hidden',
            width:'100%',textAlign:'center'
        }}>Accident Severity Method</Text>
        </TouchableOpacity>


        <TouchableOpacity

        onPress={()=>navigation.navigate('ARM')}

         style={{display:'flex',
        flexDirection:'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow:'hidden',
        flexWrap:'wrap',width:'45%',
        justifyContent:'space-between',
        alignItems:'center'}}>

            <Image 
            source={require('../assets/arm.png')}
            style={{width:width/2.5,height:180,resizeMode:'contain'}}
            />

            <Text style={{
            backgroundColor:'#2A84F2',
            color:'white',
            marginVertical:5,
            fontWeight:'bold',fontSize:16,
            padding:5,bottom:'10%',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            borderRadius:6,overflow:'hidden',
            width:'100%',textAlign:'center'
        }}>Accident Rate Method</Text>
        </TouchableOpacity>
        

        </View>


        <View style={{bottom:'10%', width:width/1.15,display:'flex',flexDirection:'row',justifyContent:'space-between',marginHorizontal:'50%'}}>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('CAR')}

        style={{display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow:'hidden',
        flexWrap:'wrap',width:'45%',
        alignItems:'center'}}>

    <Image 
    source={require('../assets/rq.png')}
    style={{width:width/2.5,height:180,resizeMode:'contain'}}
    />

    <Text style={{
    backgroundColor:'#2A84F2',
    color:'white',
    marginVertical:5,
    fontWeight:'bold',fontSize:16,
    padding:5,
    bottom:'10%',
    borderRadius:6,overflow:'hidden',
    width:'100%',textAlign:'center'
}}>critical accident rate</Text>
</TouchableOpacity>


{/* <TouchableOpacity 
onPress={()=>navigation.navigate('results')}
style={{display:'flex',
flexDirection:'column',
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 3,
overflow:'hidden',
flexWrap:'wrap',width:'45%',
justifyContent:'space-between',
alignItems:'center'}}>

    <Image 
    source={require('../assets/result.png')}
    style={{width:width/2.5,height:180,resizeMode:'contain'}}
    />

    <Text style={{
    backgroundColor:'#2A84F2',
    color:'white',
    marginVertical:5,
    fontWeight:'bold',fontSize:16,
    padding:5,bottom:'10%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius:6,overflow:'hidden',
    width:'100%',textAlign:'center'
}}>Results</Text>
</TouchableOpacity> */}


</View>
        
    </View>
  )
}
