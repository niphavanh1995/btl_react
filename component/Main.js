import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, TabBarBottom } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import DetailsScreen from './Detail'
import QuanScreen from './Quan'
import VayScreen from './Vay'
import SoMiScreen from './Sominam'


const QuanStack = createStackNavigator({
    Quan: { screen: QuanScreen },
    Details: { screen: DetailsScreen },
}, {
    headerMode: 'none'
});
const VayStack = createStackNavigator({
    Vay: { screen: VayScreen },
    Details: { screen: DetailsScreen },
}, {
    headerMode: 'none'
});
const SoMiStack = createStackNavigator({
    SoMi: { screen: SoMiScreen },
    Details: { screen: DetailsScreen },
}, {
    headerMode: 'none'
});

const TabNavigator = createMaterialTopTabNavigator({
    Quan: {
        screen: QuanStack,
        navigationOptions: {
            tabBarLabel: "Quần nữ",
        }
    },
    Vay: {
        screen: VayStack,
        navigationOptions: {
            tabBarLabel: "Váy",
        }
    },
    SoMi: {
        screen: SoMiStack,
        navigationOptions: {
            tabBarLabel: "Sơ mi nam",
        }
    },
}, {
    justifyContent: 'center',
    alignItems: 'center',
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'red',
        labelStyle: {
            fontSize: 17,
        },
        tabStyle: {
        },
        activeBackgroundColor: '#4ddddd',
        style: {
            backgroundColor: '#fffd',
        },
    },
}
);
const App = createAppContainer(TabNavigator);
export default App;