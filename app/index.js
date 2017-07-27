import React from 'react'
import {Platform} from 'react-native'
import {Tabs,Drawer} from './config/route'

export class Root extends React.Component {
    render(){
        return (
            (Platform.OS == 'ios') ? <Tabs/> : <Drawer/>
        )
    }
}