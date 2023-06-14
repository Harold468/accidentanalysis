import React, { useState } from 'react'
import { Alert, Keyboard, ScrollView, 
    Text, TextInput, Image,
    TouchableOpacity, 
    TouchableWithoutFeedback, View } from 'react-native'
import { Globalstyles } from '../globalstyles'
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Accidentserveritymethod({navigation}) {
    const [fatal,setFatal]=useState('');
    const [incapacitating,setIncapacitating]=useState('');
    const [nonincapacitating,Setnonincapacitating]=useState('');
    const [probable,setProbable]=useState('');
    const [property,setProperty]=useState('');
const videoUri = 'https://www.youtube.com/watch?v=dBf6BTX1bmM';

const trysend=()=>{

    if(parseFloat(fatal)
     && parseFloat(incapacitating) 
     && parseFloat(nonincapacitating) 
     && parseFloat(probable)&& parseFloat(property)){

    const EPDO= (9.5 * (
        parseFloat(fatal) + parseFloat(incapacitating)
    ) + 3.5 * (parseFloat(nonincapacitating) + parseFloat(probable)) +
        parseFloat(property)
    );
    navigation.navigate('results',{
        fatal,
        incapacitating,
        nonincapacitating,
        probable,property,
        EPDO
    })
}else return Alert.alert('Incorrect input','One or more inputs may not be numbers')
}
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView style={{backgroundColor:'#fff',paddingTop:'2%'}}>
    <View style={Globalstyles.container}>
        <Text style={{marginVertical:'2%',marginHorizontal:'2%',textAlign:'center'}}>
        Accident rates may be evaluated in terms of the 
        accident numbers associated with each accident severity type. 
        Or all accident severity types may be converted to the equivalent
         property damage only (EPDO) factor
        </Text>
        
        <Image
        source={require('../assets/asm.png')}
        style={{resizeMode:'contain'}}
      />

        <View>
            
            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',

            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>No of Fatal Accidents </Text>
                <TextInput
                placeholder='number of fatal accidents'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setFatal(text)}
                keyboardType='number-pad'
                />
            </View>

            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>No of incapacitating injury Accidents </Text>
                <TextInput
                placeholder='number of incapacitating injury accidents'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setIncapacitating(text)}
                keyboardType='number-pad'
                />
            </View>

            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>No of non-incapacitating injury Accidents </Text>
                <TextInput
                placeholder='number of probable/slight injury accidents'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>Setnonincapacitating(text)}
                keyboardType='number-pad'
                />
            </View>


            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>number of probable/slight injury accidents</Text>
                <TextInput
                placeholder='number of probable/slight injury accidents'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setProbable(text)}
                keyboardType='number-pad'
                />
            </View>

            <View style={{flexDirection:'row',
            display:'flex',marginHorizontal:'2%',
            marginVertical:'4%',
            alignItems:'center',justifyContent:'space-between'
            ,}}>
                <Text style={{width:'40%',flexWrap:'wrap'}}>Property Damage Only</Text>
                <TextInput
                placeholder='Property Damage'
                style={{borderWidth:1,borderColor:'gray',
                padding:10,borderRadius:10,
                width:'50%',
                overflow:'hidden'
                }}
                onChangeText={(text)=>setProperty(text)}
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
