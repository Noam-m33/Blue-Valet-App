import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, SafeAreaView, ScrollView } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Logo from '../../assets/LogoWhite.png'
import OrderImage from '../../assets/OrderIllustration.png';
import GetBackIllustration from '../../assets/GetBackIllustration.png';
import TrustIllustration from '../../assets/TrustIllustration.png';

const CarouselView = ({ item }) => {
  return(
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'white', fontWeight: '700'}}>{item.Title}</Text>
      <Text style={{ color: 'white', marginTop: 10, fontWeight: '600'}}>{item.firstLine}</Text>
      <Text style={{ color: 'white', fontWeight: '600', marginBottom: 40}}>{item.secondLine}</Text>
      <Image source={item.image} style={{ height: item.imgH , width: item.imgW}} />
    </View>
  );
}

const data= [
  {
    Title: "JE RÉSERVE",
    firstLine: "Mon voiturier dédié depuis l'application.",
    secondLine: "Jusqu'à la veille de mon départ.",
    image: OrderImage,
    imgH: 202.58,
    imgW: 122.54,
  },
  {
    Title: "JE CONFIE",
    firstLine: "mon véhicule à mon voiturier dédié",
    secondLine: "directement au dépose-minute",
    image: TrustIllustration,
    imgH: 197.86,
    imgW: 281.39,
  },
  {
    Title: "JE RÉCUPERE",
    firstLine: "Mon voiturier dédié depuis l'application.",
    secondLine: "Jusqu'a la veille de mon départ.",
    image: GetBackIllustration,
    imgH: 192.04,
    imgW: 333.76,
  },
]


const Welcome = ({ navigation, skipWelcomeSection }) => {
    const [selectedCarousel, setSelectedCarousel]= useState(0);
    return (
        <SafeAreaView style={{
          flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#2E4CB9'
        }}
        >
          <StatusBar barStyle="light-content" backgroundColor="white" />
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={Logo} style={{ height: 51, width: 85}} />
          </View>
          <View style={{ flex: 5, alignItems: 'center'}}>
          <Carousel
          renderItem={CarouselView}
          itemWidth={400}
          sliderWidth={400}
          data={data}
          onSnapToItem={(index)=> setSelectedCarousel(index)}
          />
          <View style={{ height: 30, width:60, marginTop: 0, flexDirection: 'row', justifyContent: 'space-around' }}>
            {
              data.map((v, i)=> {
                const opacity = (selectedCarousel === i) ? 1 : 0.5
                return(
                  <View key={i} style={{ height: 5, width: 12, backgroundColor: 'white',opacity: opacity, borderRadius: 10}}></View>
                )
              })
            }
          </View>
          </View>
          <View style={{
            height: 150,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
          >
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontWeight: 'bold', color: '#2E4CB9', fontSize: 14 }}>SE CONNECTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {backgroundColor: '#2E4CB9', borderWidth: 2, borderColor: 'white'}]} onPress={() => navigation.navigate('Register')}>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14 }}>CRÉE MON COMPTE</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={skipWelcomeSection}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'right', marginLeft: '66%', textDecorationLine: 'underline'}}>Passer</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      btn: {
        height: 60,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
      }
    });
    
export default Welcome