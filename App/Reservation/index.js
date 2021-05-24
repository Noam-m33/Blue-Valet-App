import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Location from './Location';
import LogoWhite from '../../assets/LogoOnlyWhite.png'

const Stack = createStackNavigator();

const Reservation = () => {
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
                    <Location 
                        {...props} 
                        data={locationData?.[selectedLocationType]} 
                        selectedType={selectedLocationType}
                        filteredArray={filteredArray}
                        filteredValue={filterValue}
                        handleResearch={handleResearch}
                        handleSelectedLocation={(value) => handleSelectedLocation(value)}
                        handleSelectedType={(value) => handleSelectedType(value)}
                        selectedLocation={currentLocation}
                    /> 
                 }
            </Stack.Screen>
            <Stack.Screen name="Lieu de " component={Location} />
                
        </Stack.Navigator>
    )
}

export default Reservation;


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