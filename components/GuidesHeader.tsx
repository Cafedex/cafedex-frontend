import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const categories = [
  {
    name:"Pour-Over"
  },
  {
    name:"Espresso"
  },
  {
    name:"Cold Brew"
  },
  {
    name:"Aeropress"
  },
  {
    name:"French Press"
  },
];

interface Props {
  onCategoryChanged: (category: string) => void;
}

const GuidesHeader = () => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x)=> {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true});
    });
  }

  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Collection</Text>
        </View>
        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 16,
            paddingVertical: 1,
          }}>
          {categories.map((item, index)=>(
            <TouchableOpacity
            ref={(el) => (itemsRef.current[index]= el)}
            key={index}
            style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
            onPress={()=> selectCategory(index)}>
              <Text>
                {item.name}
              </Text>

            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    borderEndStartRadius:15,
    borderEndEndRadius:15,
    paddingVertical:25,

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    fontFamily: 'mon-b',
    fontSize: 24,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

export default GuidesHeader;
