import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [goals, setGoals] = useState([]);


    const onAddGoal = (enteredGoalText) => {
        setGoals(prevState => [{text: enteredGoalText, key: Math.random().toString()}, ...prevState]);
    };

    const removeGoalHandler = (key) => {
        setGoals(prevState => prevState.filter(goal => goal.key !== key));
    };

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };
    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <StatusBar style="light"/>
            <View style={styles.container}>
                <Button title="Add Goal" color="#5e0acc" onPress={handleOpenModal}/>
                <GoalInput onAddGoal={onAddGoal} isOpen={isModalVisible} onClose={handleCloseModal}/>
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={
                            (itemData) => <GoalItem text={itemData.item.text}
                                                    removeHandler={() => removeGoalHandler(itemData.item.key)}/>
                        }
                        alwaysBounceVertical={false}
                    >
                    </FlatList>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },

});
