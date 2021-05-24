import React from 'react';
import { ScrollView, Text, TextInput, StyleSheet , TouchableWithoutFeedback, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import searchImage from '../../assets/search.png'
import validateLogo from '../../assets/validateLogo.png'

const Location = ({ data, handleSelectedLocation, handleSelectedType, selectedType, selectedLocation, handleResearch, filterValue, filteredArray }) => {
    const selectedArray = (selectedType === "research") ? filteredArray : data
    console.log(selectedLocation);
    return(
        <View style={{ flex: 1}}>
            <View style={{ flex: 1, backgroundColor: '#2E4CB9', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>Lieu de départ</Text>
            </View>
            <View style={{ flex: 7, alignItems: 'center'}}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '500', margin: 10 }}>Sélectionner un lieu de depart</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 30, height: 34, width: 320, backgroundColor: 'white', margin: 10}}>
                    <Image source={searchImage} style={{ height: 20, width: 20, marginHorizontal: 10 }} />
                    <TextInput
                        style={{ flex:1, backgroundColor: 'white', borderRadius: 30 }}
                        placeholder="Rechercher un lieu"
                        onChangeText={(e) => handleResearch(e)}
                        value={filterValue}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={()=>handleSelectedType('airport')} style={[styles.typeButton, (selectedType == "airport") && { backgroundColor: '#4169E1' }]}>
                        <Text style={[{ color: '#2E4CB9', fontWeight: '500', fontSize: 16 }, (selectedType == "airport") && { color : 'white' }]}>Aéroport</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleSelectedType('gare')} style={[styles.typeButton, (selectedType == "gare") && { backgroundColor: '#4169E1' }]}>
                        <Text style={[{ color: '#2E4CB9', fontWeight: '500', fontSize: 16 }, (selectedType == "gare") && { color : 'white' }]}>Gare</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ margin: 10, }}>
                    {
                        (!selectedArray[0]) &&
                        <Text>Aucune location trouvé</Text>
                    }
                    {
                        selectedArray?.map((value, index) => (
                        <TouchableOpacity 
                            onPress={() => handleSelectedLocation(value)} 
                            key={index} 
                            style={[styles.locationButton, (selectedLocation == value) && { backgroundColor: '#4169E1' }]}
                        >
                            <Text style={[{ color: 'black'} ,(selectedLocation === value) && { color: 'white' }]}>{value}</Text>
                            {
                                (selectedLocation === value) && <Image source={validateLogo} style={{ height: 20, width: 20, position: 'absolute', right: 15 }} />
                            }
                        </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <TouchableWithoutFeedback>
                    <View style={[styles.validateButton, (selectedLocation) && { backgroundColor: '#2E4CB9' } ]}>
                        <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>Valider</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({
    typeButton: {
        height: 75,
        width: 125,
        borderRadius: 15, 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1.2, 
        borderColor: '#4169E1',
    },
    locationButton: {
        height: 40, 
        width: 280,  
        flexDirection: 'row',
        borderRadius: 15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        margin: 5, 
        borderColor: '#4169E1', 
        borderWidth: 1.4
    },
    validateButton: {
        height: 50,
        width: 250, 
        backgroundColor: 'grey', 
        margin: 10, 
        borderRadius: 300, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})