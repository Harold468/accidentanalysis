import React,{useEffect} from 'react'
import { View,
    Text,Alert,
    Image,
     Dimensions,
      SafeAreaView } from 'react-native'
import { Globalstyles } from '../globalstyles'
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("screen");
export default function OnboardingScreen({ navigation }) {
    const imageHeight = height - 300; // Adjust this value as needed
  
    useEffect(()=>{
        AsyncStorage.getItem('user')
        .then((user)=>{
            if(user===null){
            AsyncStorage.setItem('user', JSON.stringify({userstatus:'signedup'}))
            .then((user)=>{Alert.alert('User status','User Information saved')})
            }
        })
      },[])

    return (
      <Onboarding
      onDone={(()=>navigation.replace('HomeScreen'))}
      onSkip={(()=>navigation.replace('HomeScreen'))}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
                <SafeAreaView>
              <Image
                source={require('../assets/carknockingdownsomeone.jpg')}
                style={{ width: width/1.05,
                borderRadius:16,overflow:'hidden',
                 height: '90%',}}
              />
              </SafeAreaView>
            ),
            title: 
            <Text style={{bottom:'20%',fontWeight:'bold',fontSize:20}}>
                Be careful
                </Text>
                ,
            subtitle: <Text style={{bottom:'19%',textAlign:'center',fontSize:18,marginHorizontal:4}}>Be careful when crossing the road</Text>,
          },
          {
            backgroundColor: '#fff',
            image: <SafeAreaView>
                <Image source={require('../assets/cars1.jpg')}
             style={{ width: width/1.05,
             borderRadius:16,overflow:'hidden',
              height: '90%',}}/>
              </SafeAreaView>
              ,
            title:  <Text style={{bottom:'20%',textAlign:'center',fontWeight:'bold',fontSize:20}}>
                Head-on Collisions
                </Text>,
            subtitle: (
              <Text style={{bottom:'19%',textAlign:'center',fontSize:18,marginHorizontal:4}}>
                Head-on collisions happen due to a multitude of reasons most of which could be avoided
                 </Text>
            ),
          },
          {
            backgroundColor: '#fff',
            image:
            <SafeAreaView>
                 <Image source={require('../assets/firstaid.jpg')} 
            style={{ width: width/1.05,
                borderRadius:16,overflow:'hidden',
                 height: '90%',}}
             />
             </SafeAreaView>
             ,
            title: <Text style={{bottom:'20%',textAlign:'center',fontWeight:'bold',fontSize:20}}>
            ADMINISTRATION OF FIRST AID</Text>,
            subtitle: <Text style={{bottom:'19%',textAlign:'center',fontSize:18,marginHorizontal:4}}>
            Just having a first aid kit is not enough.. learn how to handle simple procedures.</Text>,
          },
        ]}
      />
    );
  }
  
