import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export function Product() {
    return (
        <View style={styles.container}>
            <Text>Product</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})