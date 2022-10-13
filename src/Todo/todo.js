import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useReducer } from 'react'
import { INITIAL_STATE, todoReducer } from './todoReducer'
import { ACTION_TYPES } from './todoActionTypes'

const { width, height } = Dimensions.get("window")

const Todo = () => {

    const [text, onChangeText] = React.useState("");
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.inputStyle} textAlign={'center'} onChangeText={onChangeText} value={text}></TextInput>
                    <TouchableOpacity style={styles.centerAlign} onPress={()=>{
                        dispatch({type: ACTION_TYPES.ADD_TODO, payload: {
                            id: Date.now(),
                            text,
                            isComplete: false
                        }})
                        onChangeText("")
                    }}>
                        <View style={[styles.addButtonStyle, styles.centerAlign]}>
                            <Text>{'Add'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{flex: 1, marginTop: 20}}>
                        {
                            (state.length > 0)?
                                state.map((data) => {
                                    return (
                                        <View style={{padding: 20, backgroundColor: '#e0e0e0', flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
                                            <Button style={{height: 20, width: 20, backgroundColor: 'green'}} title={'C'} onPress={() => dispatch({type: ACTION_TYPES.TOGGLE_TODO, payload: data.id})}></Button>
                                            <Text style={{textDecorationLine: (data.isComplete)?"line-through":"none"}}>{data.text}</Text>
                                            <Button style={{height: 20, width: 20, backgroundColor: 'green'}} title={'D'} onPress={()=>dispatch({type: ACTION_TYPES.DELETE_TODO, payload: data.id})}></Button>
                                        </View>
                                    )
                                })
                            : <Text>{"NO DATA"}</Text>
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Todo

const styles = StyleSheet.create({
    centerAlign: {
        justifyContent: "center", 
        alignItems: "center"
    },
    container: {
        paddingHorizontal: 20
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        height: 60,
        width: width - 40
    },
    addButtonStyle: {
        marginTop: 20,
        height: 40,
        width: width - 100,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2
    }
})