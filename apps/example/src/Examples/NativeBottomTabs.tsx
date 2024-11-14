import * as React from 'react';
import { Article } from '../Screens/Article';
import { Albums } from '../Screens/Albums';
import { Contacts } from '../Screens/Contacts';
import { Chat } from '../Screens/Chat';
// This import works properly when library is published
import createNativeBottomTabNavigator from '../../../../packages/react-native-bottom-tabs/src/react-navigation/navigators/createNativeBottomTabNavigator';
import { Platform } from 'react-native';

const Tab = createNativeBottomTabNavigator();

function NativeBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      labeled={true}
      hapticFeedbackEnabled={false}
      tabBarInactiveTintColor="#C57B57"
      tabBarActiveTintColor="#F7DBA7"
      barTintColor="#1E2D2F"
      rippleColor="#F7DBA7"
      tabLabelStyle={{
        fontFamily: 'Avenir',
        fontSize: 15,
      }}
      activeIndicatorColor="#041F1E"
      screenListeners={{
        tabLongPress: (data) => {
          console.log(
            `${Platform.OS}: Long press detected on tab with key ${data.target} at the navigator level.`
          );
        },
      }}
    >
      <Tab.Screen
        name="Article"
        component={Article}
        listeners={{
          tabLongPress: (data) => {
            console.log(
              `${Platform.OS}: Long press detected on tab with key ${data.target} at the screen level.`
            );
          },
        }}
        options={{
          tabBarBadge: '10',
          tabBarIcon: ({ focused }) =>
            focused
              ? require('../../assets/icons/person_dark.png')
              : require('../../assets/icons/article_dark.png'),
        }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarIcon: () => require('../../assets/icons/grid_dark.png'),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log('Contacts tab press prevented');
          },
        }}
        options={{
          tabBarIcon: () => require('../../assets/icons/person_dark.png'),
          tabBarActiveTintColor: 'yellow',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        listeners={{
          tabPress: () => {
            console.log('Chat tab pressed');
          },
        }}
        options={{
          tabBarIcon: () => require('../../assets/icons/chat_dark.png'),
          tabBarActiveTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  );
}

export default NativeBottomTabs;