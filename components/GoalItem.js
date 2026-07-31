import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({removeHandler, text}) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#0a156a'}}
                // for IOS
                style={({pressed}) => pressed && styles.pressedItem}
                onPress={removeHandler}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    },
});