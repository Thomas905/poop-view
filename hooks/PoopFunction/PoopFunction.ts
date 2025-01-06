import * as Location from 'expo-location';

export async function dropThePoop() {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;

        await fetch(process.env.EXPO_PUBLIC_API_URL + '/pooppoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                latitude: latitude,
                longitude: longitude,
                title: 'Poop Point',
            }),
        });
        console.log('Poop dropped at', latitude, longitude);
    } catch (error) {
        console.error('Error dropping the poop:', error);
    }
}

export async function getPoopPoints() {
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + '/pooppoint');
    const poopPoints = await response.json();
    return poopPoints;
}

export const fetchMarkers = async (setMarkers:any) => {
    try {
        const poopPoints = await getPoopPoints();
        const mappedMarkers = poopPoints.map((marker: any) => ({
            coordinate: {
                latitude: marker.latitude,
                longitude: marker.longitude,
            },
            title: marker.title,
        }));
        setMarkers(mappedMarkers);
    } catch (error) {
        console.error('Failed to fetch markers:', error);
    }
};

export const fetchCurrentLocation = async (setCurrentLocation: any, mapRef: any) => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });

        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };

        setCurrentLocation(region);
        mapRef.current?.animateToRegion(region, 1000);
    } catch (error) {
        console.error('Error fetching current location:', error);
    }
};