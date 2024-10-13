import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
    guides.filter((guide)=>guide.category === currentCategory)
  }

  let loading = false;
    return (
        <View>
          { loading ? (
              <>        
                <Text> Loading... </Text>
              </>
            ) : (
                <View style={styles.tileContainer}>
                {guides.map((guide, index)=>(
                  <TouchableOpacity style={styles.tile} key={index}>
                    <View key={index} style={{alignItems: 'center'}}>
                      <Text style={styles.tileLabel}key={index}>{guide.name}</Text> 
                      <Text style={{fontSize:10, top:5}}>{guide.author} </Text>
                    </View>
                  </TouchableOpacity>
                ))}
                </View>
            )}
        </View>
    )
}

export default GuideGallery


const styles = StyleSheet.create({
  tileContainer: {
    flexDirection:'row', 
    flexWrap: 'wrap', 
    justifyContent:'space-between',
    padding:10,
  },
  tile:{
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    flexBasis:'30%', 
    height:128,
    width:'100%', 
    marginBottom:10,
    marginHorizontal:5 , 
    backgroundColor:'#ccc', 
    justifyContent: 'center', 
    alignItems:'center', 
    borderRadius:15,
  },
  tileLabel: {
    fontSize: 15,
  },
});

