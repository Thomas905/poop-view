import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from "@/components/Button/Button";
import {dropThePoop, poopfetchMarkers} from "@/hooks/PoopFunction/PoopFunction";

const InteractiveMap: React.FC = () => {
    const [markers, setMarkers] = useState<any[]>([]);

    useEffect(() => {
        poopfetchMarkers(setMarkers);
    }, []);

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
                <Button action={async () => {
                    await dropThePoop();
                    await poopfetchMarkers(setMarkers);
                }} />
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
