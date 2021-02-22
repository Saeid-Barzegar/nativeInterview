import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MasterPage from "../../components/MasterPage";

const Home = () => {

    const footer = (
        <View style={styles.footer}>
            <Text>footer</Text>
        </View>
    )

    const array = (end) => {
        let array = [];
        let index = 0;
        while (index <= end) {
            array.push(index);
            index++;
        }
        return array
    }
    const content = (
        <View style={styles.container}>
            {array(100).map( (number, index) => <Text key={index}>Row Number {number}</Text>)}
        </View>
    )
    return (
        
        <MasterPage 
            pageTitle={"Home"}
            pageSubTitle="Home page container"
            content={content}
            // footer={footer}
            />
    )

}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    footer :{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#33c7ec"
    }
})

export default Home;