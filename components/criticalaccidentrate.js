import React, { useState } from 'react'
import { Alert, Keyboard, ScrollView, 
    Text, TextInput, Image,
    TouchableOpacity, 
    TouchableWithoutFeedback, View } from 'react-native'
import { Globalstyles } from '../globalstyles'
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Criticalaccidentrate({navigation}) {
    const [K,setK]=useState('');
    const [Ra,setRa]=useState('');

const videoUri = 'https://www.youtube.com/watch?v=dBf6BTX1bmM';

const trysend=()=>{

    if(parseFloat(K)
     && parseFloat(Ra)){

        const Rc = (parseFloat(Ra) +
        (parseFloat(K) *
            (
                Math.sqrt(
                    (
                        parseFloat(Ra) / (Math.pow(10, 6))
                    )
                )
            )
        )).toString().substring(0,8);

    navigation.navigate('results',{
        Ra,
        K,
        Rc,
    })
    // Alert.alert('dsf',`${Rc}`)
}else return Alert.alert('Incorrect input','One or more inputs may not be numbers')
}
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView style={{backgroundColor:'#fff',paddingTop:'2%'}}>
    <View style={Globalstyles.container}>
        <Text style={{marginVertical:'2%',marginHorizontal:'2%',textAlign:'center'}}>
        critical accident rate for a spot (accident/million vehicles) or
section (accident/million vehicles-kilometres)
        </Text>
        
        <Image
        source={require('../assets/rq.png')}
        style={{resizeMode:'contain'}}
      />

        <View>
            
            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',

            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>Probability Factor </Text>
                <TextInput
                placeholder='Probability Factor'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setK(text)}
                keyboardType='number-pad'
                />
            </View>

            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>average accident rate for all spots or sections of similar characteristics</Text>
                <TextInput
                placeholder='average accident rate for all spots or sections of similar characteristics '
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setRa(text)}
                keyboardType='number-pad'
                />
            </View>           

        </View>
        
        <TouchableOpacity 
        onPress={trysend}
        style={{display:'flex',
            flexDirection:'row',marginBottom:'10%',
            borderRadius:16,overflow:'hidden',
            backgroundColor:'rgb(42, 132, 242)',
            padding:'2%',color:'#fff',marginHorizontal:'10%',
            marginVertical:10
    }}>
            <MaterialCommunityIcons
            name='send'
            color='white'
            size={32}
            />
            <Text 
            style={{textAlign:'center',
            width:'80%',flexWrap:'wrap',
            color:'white',
            fontWeight:'bold',fontSize:22,
            
            }}>Process Data</Text>
        </TouchableOpacity>

    </View>
        </ScrollView>
  </TouchableWithoutFeedback>
  )
}
