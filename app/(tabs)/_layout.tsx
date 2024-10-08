import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon',
          top:10,
        },
        tabBarStyle:{
          backgroundColor: '#ffffff',
          position: 'absolute',
          borderRadius:25,
          bottom: 25,
          left: 20,
          right:20,
          elevation:0
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIconStyle: { top: 15},
          tabBarLabel: 'Map',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
          <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          tabBarIconStyle: { top: 15},
          tabBarLabel:'Collection',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIconStyle: { top: 15},
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
};

export default Layout;
