import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';
import GuidesHeader from '@/components/GuidesHeader';
import CafeMap from '@/components/CafeMap'
import MapSideBanner from '@/components/MapSideBanner';

const Page = () => {
  const [category, setCategory] = useState<string>('Pour-Over');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  const cafeData = {
    locations: [
      {
        id: 0,
        name: "KAIZEN COFFEE",
        properties: {
          latitude: "37.545037038600306", 
          longitude:"-122.3060117391627",
        },
      },
      {
        id: 1,
        name: "Academic Coffee",
        properties: {
          latitude:"37.32918395915575",
          longitude:"-121.88407674457169"
        },
      },
      {
        id: 2,
        name:"The Coffee Movement",
        properties: {
          latitude: "37.77887282134126",
          longitude:"-122.47823596299988" 
        },
      },
      {
        id: 3,
        name: "Devout Coffee",
        properties: {
          latitude: "37.58005871563196",
          longitude:"-121.96261316958278"
        },
      },
      {
        id: 4,
        name: "Coffee Water Lab",
        properties: {
          latitude: "37.315707529407284",
          longitude:"-121.97650792383095"
        },
      },
      {
        id: 5,
        name: "Saint Frank Coffee",
        properties: {
          latitude: "37.460032167347286",
          longitude:"-122.18108435140324"
        },
      },
      {
        id: 6,
        name: "AM Craft",
        properties: {
          latitude: "37.336553357787466",
          longitude:"-121.87705831758508"
        },
      },
    ]
  }

  return (
    <View style={{ flex:1 }}>
 
      <CafeMap cafes={cafeData} />
    </View>
  )
}

export default Page;