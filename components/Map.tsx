import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const initialMarkers = [
    {
        id: 1,
        title: "Tour Eiffel",
        description: "First.",
        coordinate: {
            latitude: 48.8588443,
            longitude: 2.2943506,
        },
    },
    {
        id: 2,
        title: "Marseille",
        description: "Second",
        coordinate: {
            latitude: 43.296482,
            longitude: 5.36978,
        },
    },
    {
        id: 3,
        title: "Metz",
        description: "Third",
        coordinate: {
            latitude: 49.1193089,
            longitude: 6.1757156,
        },
    },
];

const InteractiveMap: React.FC = () => {
    const [markers, setMarkers] = useState(initialMarkers);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 46.603354,
                    longitude: 1.888334,
                    latitudeDelta: 8,
                    longitudeDelta: 8,
                }}
                zoomEnabled={true}
                mapType="satellite"

            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        width: 500,
    },
});

export default InteractiveMap;
