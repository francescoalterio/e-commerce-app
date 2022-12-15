import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export function Search() {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
})