import React from 'react'
import MyTabs from '../bottomNavigation/MyTabs'
import { View, StyleSheet } from 'react-native';
import Home from '../screen/Home';

function MainScreen() {
    return (
        <View >


            <MyTabs />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },


});


export default MainScreen