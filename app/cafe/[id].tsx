import Colors from '@/constants/Colors';
import { useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';

const Page = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image 
        style={{width:'100%', height: '30%', borderRadius:16}}         
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }} 
      />   
      <View style={{padding: 16, flexDirection: 'row'}}>
        <Text>Cafe Name: </Text>
        <Text>Cafe ID: {id}</Text>
      </View>   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 26,
    },
  
    seperatorView: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginVertical: 30,
    },
    seperator: {
      fontFamily: 'mon-sb',
      color: Colors.grey,
      fontSize: 16,
    },
    btnOutline: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: Colors.grey,
      height: 50,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    btnOutlineText: {
      color: '#000',
      fontSize: 16,
      fontFamily: 'mon-sb',
    },
  });
  
  export default Page;