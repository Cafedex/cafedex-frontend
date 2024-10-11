import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import Animated from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';

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
interface Props {
  guides: Guide[];
  currentCategory: string;
}


const GuideGallery: React.FC<Props> = ({guides, currentCategory}) => {

  useEffect(()=>{
    filterCategory(currentCategory)
  })

  const filterCategory = (currentCategory: string) => {
    
  }

  let loading = false;
    return (
        <View style={styles.gridContainer}>
          { loading ? (
              <>        
                <Text> Loading... </Text>
              </>
            ) : (
              <>
              {guides.map((guide, index)=>(
                <TouchableOpacity style={styles.tile}>
                  <View>
                    <Text key={index}>{guide.name} by {guide.author}</Text> 
                  </View>
                </TouchableOpacity>
                
              ))}
              </>
            )}
        </View>
    )
}

export default GuideGallery


const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingTop:16,
  },
  tileContainer: {
    width: '20%',
    margin: '1%',
    borderRadius: 16,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    flex: 1,
    height: '100%',
    width: ' 100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    marginHorizontal:4,
    marginTop:4
  },
  tileLabel: {
    color: '#f8f9ff',
    fontSize: 24,
  },
});

