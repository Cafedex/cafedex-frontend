import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { memo, useEffect, useRef } from 'react';
import { defaultStyles } from '@/constants/Styles';
// import { Marker } from 'react-native-maps';
// import MapView from 'react-native-map-clustering';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
// import * as Location from 'expo-location';

interface Props{
  cafes: any
}

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

  return (
    <View>
      <Text>Map View goes here</Text>
    </View>
  );
});

export default CafeMap