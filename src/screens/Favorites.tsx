import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export function Favorites() {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})