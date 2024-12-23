import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from "@/components/Button/Button";
import {dropThePoop, fetchCurrentLocation, fetchMarkers} from "@/hooks/PoopFunction/PoopFunction";

const InteractiveMap = () => {
    const [markers, setMarkers] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        fetchMarkers(setMarkers);
        fetchCurrentLocation(setCurrentLocation, mapRef);
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: 46.603354,
                    longitude: 1.888334,
                    latitudeDelta: 8,
                    longitudeDelta: 8,
                }}
                showsUserLocation={true}
                zoomEnabled={true}
                mapType="satellite"
            >
                {markers.map((marker: any, index: any) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                    />
                ))}
            </MapView>
            <View className="absolute bottom-0 self-center">
                <Button
                    action={async () => {
                        await dropThePoop();
                        await fetchMarkers(setMarkers);
                        await fetchCurrentLocation(setCurrentLocation, mapRef);
                    }}
                />
            </View>
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
