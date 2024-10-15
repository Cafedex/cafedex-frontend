import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';

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
  const [filteredGuides, setFilteredGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    
    // Filter guides based on current category
    const filtered = guides.filter((guide) => guide.category === currentCategory);
    
    setFilteredGuides(filtered);
    
    // Simulate delay for loading effect by wrapping the line below in a timeout
    setLoading(false);
 
  },[currentCategory, guides]);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : filteredGuides.length > 0 ? (
        <View style={styles.tileContainer}>
          {filteredGuides.map((guide) => (
            <TouchableOpacity style={styles.tile} key={guide.id}>
              <Link push href={{
                pathname:`/guide/[id]`,
                params: {id:guide.id}
              }}>
              <View style={{ justifyContent:'center',alignItems: 'center', height: '100%', width:'100%'}}>
                <Text style={styles.tileLabel}>{guide.name}</Text>
                <Text style={{ fontSize: 10, top: 5 }}>{guide.author}</Text>
              </View>
              </Link>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text>No guides available for {currentCategory}</Text>
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

