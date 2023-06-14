import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect,useState } from 'react'
import Homepage from './components/homepage';
import OnboardingScreen from './components/onboarding';
import { Globalstyles } from './globalstyles';
import {Image,Text } from 'react-native';
import Accidentratemethod from './components/accidentratemethod';
import Accidentserveritymethod from './components/accidentserveritymethod';
import Criticalaccidentrate from './components/criticalaccidentrate';
import Results from './components/results';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [userset,setUserset]=useState('');
  useEffect(()=>{
    AsyncStorage.getItem('user')
        .then((user)=>{
            if(user!==null){
              setUserset(user)
            }else{
              setUserset(user)
            }
          })
  },[])
  return(
    <NavigationContainer>
      {userset===null&&
      <Stack.Navigator initialRouteName='Onboarding'>
      <Stack.Screen
      name='Onboarding'
      component={OnboardingScreen}
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen
      name='HomeScreen'
      component={Homepage}
      />

      <Stack.Screen
      name='ARM'
      component={Accidentratemethod}
      options={{
        headerBackVisible:true,
        headerTitleAlign:'center',
        headerTitle:'Accident Rate Method'

      }}
      />

     <Stack.Screen
      name='ASM'
      component={Accidentserveritymethod}
      options={{
        headerBackVisible:true,
        headerTitleAlign:'center',
        headerTitle:'Accident Severity Method'

      }}
      />

      <Stack.Screen
      name='CAR'
      component={Criticalaccidentrate}
      options={{
        headerBackVisible:true,
        headerBackground:(()=><Image source={require('./assets/rq.png')}/>),
        headerTitleAlign:'center',
        headerTitleStyle:{color:'white',fontWeight:'bold',fontSize:20,shadowColor:'black',shadowOffset:{width:2,height:2}},
        headerTitle:'Critical Accident Rate'
      }}
      />

      <Stack.Screen
      name='results'
      component={Results}
      options={{
        headerBackground:(()=><Image source={require('./assets/bang.png')}/>),
        headerBackVisible:true,
        headerTitleStyle:{color:'#fff',fontSize:22,fontWeight:'bold'},
        headerTitleAlign:'center',
        headerTitle:'Results'

      }}
      />

      </Stack.Navigator>
      }

      {userset !==null &&

      <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
      name='Onboarding'
      component={OnboardingScreen}
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen
      name='HomeScreen'
      options={{headerShown:true,
      headerTitle:(()=><Text style={{
        color:'#fff',letterSpacing:2,
        fontWeight:'bold',
        fontSize:20
    }}>Welcome to Bang</Text>),
      headerTitleAlign:'center',
      headerBackground:(()=><Image source={require('./assets/bang.png')}/>)
    }}
      component={Homepage}
      />

    <Stack.Screen
      name='ARM'
      component={Accidentratemethod}
      options={{
        headerBackground:(()=><Image source={require('./assets/arm.png')}/>),
        headerBackVisible:true,
        headerTitleStyle:{color:'black'},
        headerTitleAlign:'center',
        headerTitle:'Accident Rate Method'

      }}
      />

     <Stack.Screen
      name='ASM'
      component={Accidentserveritymethod}
      options={{
        headerBackground:(()=><Image source={require('./assets/asm.png')}/>),
        headerBackVisible:true,
        headerTitleStyle:{color:'white',fontWeight:'bold',fontSize:20,shadowColor:'black',shadowOffset:{width:2,height:2}},
        headerTitleAlign:'center',
        headerTitle:'Accident Severity Method',

      }}
      />

      <Stack.Screen
      name='CAR'
      options={{
        headerBackVisible:true,
        headerBackground:(()=><Image source={require('./assets/rq.png')}/>),
        headerTitleAlign:'center',
        headerTitleStyle:{color:'white',fontWeight:'bold',fontSize:20,shadowColor:'black',shadowOffset:{width:2,height:2}},
        headerTitle:'Critical Accident Rate'

      }}
      component={Criticalaccidentrate}
      />

      <Stack.Screen
      name='results'
      component={Results}
      options={{
        headerBackground:(()=><Image source={require('./assets/bang.png')}/>),
        headerBackVisible:true,
        headerTitleStyle:{color:'#fff',fontSize:22,fontWeight:'bold'},
        headerTitleAlign:'center',
        headerTitle:'Results'

      }}
      />

      </Stack.Navigator>

      }

    </NavigationContainer>

  )
}
