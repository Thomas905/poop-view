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

        await fetch('http://localhost:3000/pooppoint', {
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
    const response = await fetch('http://localhost:3000/pooppoint');
    const poopPoints = await response.json();
    return poopPoints;
}

export async function poopfetchMarkers (setMarkers: any) {
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