import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import React, { memo, useEffect, useRef } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import * as Location from 'expo-location';

interface Props{
  cafes: any
}

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 1,
  longitudeDelta: 1,
};

const CafeMap = memo(({ cafes }: Props) => {
  const router = useRouter();
  const mapRef = useRef<any>(null);

  useEffect(() => {
    onLocateMe();
  }, []);

  const onLocateMe = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
  };

  const onMarkerSelected = (marker : any) => {
    Alert.alert(marker)
  }

  return (
    <View style={defaultStyles.container}>
      <MapView
      ref={mapRef}
      style={StyleSheet.absoluteFillObject}
      initialRegion={INITIAL_REGION}
      mapType={'mutedStandard'}
      showsUserLocation>
        {cafes.locations.map((cafeLocation: any)=>(

        <Marker
          coordinate={{
            latitude: cafeLocation.properties.latitude,
            longitude: cafeLocation.properties.longitude,
          }}
          onPress={()=>{onMarkerSelected(cafeLocation.name)}}
        >
          <Image 
          source={require('@/assets/images/Marker.png')}
          style={styles.markerImage}
          />
        </Marker>
        ))}
      </MapView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerImage:{
    width: 35,
    height: 35,
  },
  marker: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
  },
  locateBtn: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});


export default CafeMap