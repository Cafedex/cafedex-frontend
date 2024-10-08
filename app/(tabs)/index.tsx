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

  return (
    <View style={{ flex:1, marginTop:80 }}>
      <Stack.Screen 
        options={{
          header: () => <GuidesHeader onCategoryChanged={onDataChanged}/>
        }}
      />
      <CafeMap cafes={null}></CafeMap>
    </View>
  )
}

export default Page;