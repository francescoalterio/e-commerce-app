import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export function ShoppingCart() {
    return (
        <View style={styles.container}>
            <Text>ShoppingCart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})