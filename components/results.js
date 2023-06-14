import React from 'react'
import { View,Text,SafeAreaView, ScrollView } from 'react-native'

export default function Results({navigation,route}) {
    const {
        fatal,
        incapacitating,
        nonincapacitating,
        probable,
        property,
        EPDO,
        Ra,
        K,
        Rc,
        A,
        L,
        V,
        T,
        Rsp,
        Rsect,
      } = route.params ?? {};
  return (
    <SafeAreaView>

<ScrollView>
    <View>
        <Text style={{
        textAlign:'center',
        backgroundColor:'rgb(42, 132, 242)',
        color:'white',fontSize:18,
        fontWeight:'bold',
        letterSpacing:2,padding:8,width:'90%',marginHorizontal:'5%',
        borderRadius:10,overflow:'hidden',marginVertical:'2%',opacity:0.6,
        }}>
            PARAMETERS
        </Text>

        {route.params === undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'20%'
            }}>
                No Data to Display
            </Text>
        }

        {A != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                No of accidents: {A}
            </Text>
        }

        {Ra != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                average accident rate for all spots or sections of similar
characteristics: {Ra}
            </Text>
        }

            {K != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                probability factor determined by the desired level of significance.: {K}
            </Text>
        }

        {L != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                Length of Road in kilometers: {L}
            </Text>
        }

        {V != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                Average Annual Daily Traffic: {V}
            </Text>
        }

        {T != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                Period of study in years: {T}
            </Text>
        }

        {fatal != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                No of Fatal accidents: {fatal}
            </Text>
        }

        {incapacitating != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                No of incapacitating accidents: {incapacitating}
            </Text>
        }

        {nonincapacitating != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                No of non-incapacitating accidents: {nonincapacitating}
            </Text>
        }

        {probable != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                No of probable injury accidents: {probable}
            </Text>
        }


        {property != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'rgb(42, 132, 242)',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                No of Property Damage: {property}
            </Text>
        }

        <Text style={{
        textAlign:'center',
        backgroundColor:'pink',
        color:'white',fontSize:18,
        fontWeight:'bold',
        letterSpacing:2,padding:8,width:'90%',marginHorizontal:'5%',
        borderRadius:10,overflow:'hidden',marginVertical:'2%',opacity:0.8,
        }}>
            RESULTS
        </Text>

        {route.params === undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'red',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'90%',marginHorizontal:'5%',
            borderRadius:10,overflow:'hidden',marginVertical:'20%',
            }}>
                No Data to Display
            </Text>
        }

        {EPDO != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'red',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                Equivalent Property Damage Only: {EPDO}
            </Text>
        }

        {Rsp != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'red',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                (Rsp) for spots and intersections or as “accidents per million“: {Rsp}
            </Text>
        }

        {Rc != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'red',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                critical accident rate for a spot (accident/million vehicles) or
section (accident/million vehicles-kilometres): {Rc}
            </Text>
        }

        {Rsect != undefined &&
        <Text style={{
            textAlign:'center',
            backgroundColor:'red',
            color:'white',fontSize:18,
            fontWeight:'bold',
            letterSpacing:2,padding:8,width:'80%',marginHorizontal:'10%',
            borderRadius:10,overflow:'hidden',marginVertical:'2%'
            }}>
                vehicle-kilometres of travel (Rsect) for roadway sections.: {Rsect}
            </Text>
        }

    </View>
    </ScrollView>

    </SafeAreaView>
  )
}
