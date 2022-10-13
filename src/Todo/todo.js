import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")

const Todo = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.inputStyle} textAlign={'center'}></TextInput>
                    <TouchableOpacity style={styles.centerAlign}>
                        <View style={[styles.addButtonStyle, styles.centerAlign]}>
                            <Text>{'Add'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{flex: 1, marginTop: 20}}>
                        <View style={{padding: 20, backgroundColor: '#e0e0e0', flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
                            <Button style={{height: 20, width: 20, backgroundColor: 'green'}} title={'C'}></Button>
                            <Text>{'jadjjadkjkdajk'}</Text>
                            <Button style={{height: 20, width: 20, backgroundColor: 'green'}} title={'D'}></Button>
                        </View>
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