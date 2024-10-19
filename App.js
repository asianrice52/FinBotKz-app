import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './News';
import Chat from './Chat';
import About from './About';
import FAQ from './FAQ';
import Quiz from './Quiz';
import LearningMaterials from './LearningMaterials';
import SocialMedia from './SocialMedia';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Создаем стек для экрана "О нас"
const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AboutScreen" component={About} options={{ title: 'О нас' }} />
      <Stack.Screen name="FAQ" component={FAQ} options={{ title: 'Часто задаваемые вопросы' }} />
      <Stack.Screen name="LearningMaterials" component={LearningMaterials} options={{ title: 'Информационные материалы' }} />
      <Stack.Screen name="SocialMedia" component={SocialMedia} options={{ title: 'Социальные сети' }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Викторина' }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'News') {
              iconName = 'newspaper-outline';
            } else if (route.name === 'Chat') {
              iconName = 'chatbubble-ellipses-outline';
            } else if (route.name === 'About') {
              iconName = 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="News" component={News} options={{ title: 'Новости' }} />
        <Tab.Screen name="Chat" component={Chat} options={{ title: 'Чат' }} />
        <Tab.Screen name="About" component={AboutStack} options={{ title: 'О нас' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
