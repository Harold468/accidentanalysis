import React, { useState } from 'react'
import { Alert, Keyboard, ScrollView, 
    Text, TextInput, Image,
    TouchableOpacity, 
    TouchableWithoutFeedback, View } from 'react-native'
import { Globalstyles } from '../globalstyles'
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Accidentratemethod({navigation}) {
    const [A,setA]=useState('');
    const [L,setL]=useState('');
    const [V,setV]=useState('');
    const [T,setT]=useState('');

const trysend=()=>{

    if(parseFloat(A)
     && parseFloat(L) 
     && parseFloat(V) 
     && parseFloat(T)){

    const Rsp = ((parseFloat(A) * Math.pow(10,6)) /
    (365 * parseFloat(T) *
        parseFloat(V))).toString().substring(0,8);

        const Rsect = ((parseFloat(A) *Math.pow(10,6)) /
    (365 * parseFloat(L) *
        parseFloat(T) * parseFloat(V))).toString().substring(0,8);

    navigation.navigate('results',{
        A,
        L,
        V,
        T,
        Rsp,
        Rsect
    })
    // Alert.alert(`${A} ${L} ${T} ${V} ${Rsp} ${Rsect} `)
}else return Alert.alert('Incorrect input','One or more inputs may not be numbers')
}
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView style={{backgroundColor:'#fff',paddingTop:'2%'}}>
    <View style={Globalstyles.container}>
        <Text style={{marginVertical:'2%',marginHorizontal:'2%',textAlign:'center'}}>
        Accident Rate Method combines accident frequency and
        exposure and may be expressed as accidents per million vehicles
       (Rsp) for spots and intersections or as “accidents per million“
        vehicle-kilometres of travel (Rsect) for roadway sections.
        </Text>
        
        <Image
        source={require('../assets/arm.png')}
        style={{resizeMode:'contain'}}
      />

        <View>
            
            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',

            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>No of accidents recorded on the section </Text>
                <TextInput
                placeholder='number of fatal accidents'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setA(text)}
                keyboardType='number-pad'
                />
            </View>

            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>Length of roadway section in kilometers</Text>
                <TextInput
                placeholder='Length of roadway section in kilometers'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setL(text)}
                keyboardType='number-pad'
                />
            </View>

            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>Period of study in years </Text>
                <TextInput
                placeholder='Period of study in years'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setT(text)}
                keyboardType='number-pad'
                />
            </View>


            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>Average Annual Daily Traffic</Text>
                <TextInput
                placeholder='Average Annual Daily Traffic'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setV(text)}
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
