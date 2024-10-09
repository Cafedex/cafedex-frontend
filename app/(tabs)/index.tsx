import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';
import GuidesHeader from '@/components/GuidesHeader';
import CafeMap from '@/components/CafeMap'

const Page = () => {
  const [category, setCategory] = useState<string>('Pour-Over');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  const cafeData = {
    locations: [
      {
        name: "KAIZEN COFFEE",
        properties: {
          latitude: "37.545037038600306", 
          longitude:"-122.3060117391627",
        }
      },
      {
        name: "Academic Coffee",
        properties: {
          latitude:"37.32918395915575",
          longitude:"-121.88407674457169"
        }
      },
      {
        name:"The Coffee Movement",
        properties: {
          latitude: "37.77887282134126",
          longitude:"-122.47823596299988" 
        }
      },
      {
        name: "Devout Coffee",
        properties: {
          latitude: "37.58005871563196",
          longitude: "-121.96261316958278"
        }
      }

    ]
  }

  return (
    <View style={{ flex:1 }}>
      <Stack.Screen 
        options={{
          header: () => <GuidesHeader onCategoryChanged={onDataChanged}/>
          
        }}
      />
      <CafeMap cafes={cafeData} />
    </View>
  )
}

export default Page;