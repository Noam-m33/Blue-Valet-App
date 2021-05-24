import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoWhite from '../../assets/LogoOnlyWhite.png'

const Stack = createStackNavigator();

const Help = () => {
    const [selectedLocationType, setSelectedLocationType] = useState("airport");
    const [currentLocation, setCurrentLocation] = useState();
    const [filterValue, setFilterValue] = useState();

    function handleResearch(value){
        console.log(value);
        if(value){
            setFilterValue(value);
            setSelectedLocationType('research')
        } else {
            setSelectedLocationType('airport')
        }
    }

    const filteredArray = locationData.airport.filter((location) => {
        if(location.includes(filterValue)){
            return location
        }
    })  
    console.log(filteredArray);

    function handleSelectedLocation(value){
        if(value === currentLocation){
            setCurrentLocation();
        } else {
            setCurrentLocation(value)
        }
    }

    function handleSelectedType(value){
        setSelectedLocationType(value);
        setCurrentLocation();
    }

    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Lieu de départ" 
             options={{ headerTitle: props => <Image source={LogoWhite} style={{ height: 30, width: 30}} />, 
                headerStyle: { 
                    backgroundColor: '#2E4CB9', 
                    shadowOffset: { height: 0, width: 0, }}, 
                    headerTintColor: 'white', }} 
            >
                {
                    (props) =>
                    <View style={{ flex: 1, backgroundColor: '#2E4CB9', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>Aide</Text>
                    </View>

                }
            </Stack.Screen>    
        </Stack.Navigator>
    )
}

export default Help;


const locationData = {
    airport: [
        "Barcelone-El Prat",
        "Bordeaux-Merignac",
        "Bruxelles Zaventem",
        "Lisbonne-Humberto Delgado",
        "Lyon-Saint-Exupéry",
        "Madrid-Barajas",
        "Marseille Provence",
        "Nantes Atlantique",
        "Nice Côte d'Azur",
        "Paris-Charles de Gaulle",
        "Paris-Orly",
        "Toulouse-Blagnac",
    ],
    gare: [
        "Aix-en-Provence TGV",
        "Bordeaux Saint Jean",
        "Lyon TGV Saint-Exupéry",
    ]
}