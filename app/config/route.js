import React from 'react'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import {Screen1} from '../screens/screen1'
import {Screen2} from '../screens/screen2'
import {Screen3} from '../screens/screen3'
import {Screen4} from '../screens/screen4'

const DrawerIcon = ({ navigate }) => {
    return (
        <Icon
            name="md-menu"
            size={28}
            color="black"
            onPress={() => navigate('DrawerOpen')}
            style={{ paddingLeft: 20 }}
        />
    );
}

export const Stack1 = StackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 1',
            headerLeft : <DrawerIcon {...navigation} />,
        }),
    },
    Screen2: {
        screen: Screen2,
    }
});
export const Stack2 = StackNavigator({
    Screen3: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: 'Screen 3',
            headerLeft : <DrawerIcon {...navigation} />,
        }),
    },
    Screen4: {
        screen: Screen4
    }
})

export const Drawer = DrawerNavigator({
    Drawer1:{
        screen: Stack1
    },
    Drawer2:{
        screen: Stack2
    }
})
export const Tabs = TabNavigator({
    Tab1:{
        screen: Drawer
    },
    Tab2: {
        screen: Stack2
    }
})