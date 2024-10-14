import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import GuidesHeader from '@/components/GuidesHeader';
import Animated from 'react-native-reanimated';
import GuideGallery from '@/components/GuideGallery';



interface Guide {
  id: number,
  name: string,
  author: string,
  category: string,
  components?: Component[],
}

interface Component {
  grinder?: string
  weight?: number
  time?: number
}

const initData = [
  {id:0,"name":"V60","author":"HLMelton","category":"Pour-Over"},
  {id:1,"name":"Kalita Wave","author":"HLMelton","category":"Pour-Over"},
  {id:2,"name":"Hario Switch","author":"HLMelton","category":"Pour-Over"},
  {id:3,"name":"French Press","author":"HLMelton","category":"French Press"},
  {id:4,"name":"Slayer Ristretto","author":"HLMelton","category":"Espresso"},
  {id:5,"name":"Aeropress","author":"HLMelton","category":"Aeropress"}
]

const fetchGuides = async (): Promise<Guide[]> => {
  const response = await fetch('http://localhost:8080/api/guides')
  if(!response.ok){
    throw new Error('Failed to fetch guides');
  }
  const data: Guide[] = await response.json()
  return data;
}

const categories = [
  { name: 'Pour-Over' },
  { name: 'Espresso' },
  { name: 'Cold Brew' },
  { name: 'Aeropress' },
  { name: 'French Press' },
];

const Page = () => {

  const loading = false;
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
  const [guides, setGuides] = useState<Guide[]>(initData);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log(`Category changed to: ${category}`);
  };

  return (
    <>
    {/* <SafeAreaView style={{flex: 1}}> */}

      <GuidesHeader categories={categories} onCategoryChanged={handleCategoryChange} />

      <ScrollView>
          <GuideGallery currentCategory={selectedCategory} guides={initData} />
      </ScrollView>
      
    {/* </SafeAreaView> */}
    </>
  )
}


const styles = StyleSheet.create({

  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },
  tileLabel: {
    color: '#f8f9ff',
    fontSize: 24,
  },
  editRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});

export default Page;
