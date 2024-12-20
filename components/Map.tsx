import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, MapPressEvent } from 'react-native-maps';

interface Coordinate {
    latitude: number;
    longitude: number;
}

const InteractiveMap: React.FC = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
            >
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
        width: 500
    },
});

export default InteractiveMap;
