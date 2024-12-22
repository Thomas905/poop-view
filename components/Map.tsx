import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from "@/components/Button/Button";

const InteractiveMap: React.FC = () => {

    const [markers, setMarkers] = useState<any[]>([]);

    let initialMarkers = fetch('http://localhost:3000/pooppoint')
        .then((response) => response.json())
        .then((json) => {
            return json.map((marker: any) => {
                return {
                    coordinate: {
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    },
                    title: marker.title,
                };
            });
        });

    useEffect(() => {
        initialMarkers.then((markers) => setMarkers(markers));

    }, []);

    function onClickOnButton() {
        console.log('Button clicked');
    }

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
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                    />
                ))}
            </MapView>
            <View className="absolute bottom-0 self-center">
                <Button action={onClickOnButton} />
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