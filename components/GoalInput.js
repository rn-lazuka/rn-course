import { TextInput, View, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

const GoalInput = ({onAddGoal, isOpen, onClose}) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        onClose()
    };

    return (
        <Modal visible={isOpen} animationType="slide" style={styles.modal}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput onChangeText={goalInputHandler} value={enteredGoalText} placeholder="Your course goal!"
                           style={styles.textInput}></TextInput>
               <View style={styles.buttonContainer}>
                   <View style={styles.button}>
                       <Button onPress={ onClose} title="Cancel" color="#f31282"/>
                   </View>
                   <View style={styles.button}>
                   <Button onPress={addGoalHandler} title="Add goal" color="#b180f0" />
                   </View>
               </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    modal:{
        backgroundColor:'#3334FF',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        gap:16,
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        borderRadius:6,
        color: '#120438'
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 16
    },
    button:{
        width: '40%',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});