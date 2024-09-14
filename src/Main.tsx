import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from "react-native";
 
 
// React Native Main Component
const Main = () : React.JSX.Element => {
    return (
        <SafeAreaView style={styles.appBg}>
            <View style={styles.headerArea}>
                <Text style={styles.headerTxt}>My First React UI !!!</Text>
                <Text style={styles.subHeading}>Sub Heading</Text>
            </View> 

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Card Title</Text>
                <View style={styles.sep} />
                <Text style={styles.cardTxt} numberOfLines={8} ellipsizeMode="tail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, pariatur consequatur ipsa provident ea explicabo doloribus vel odio maxime accusamus eveniet. Dicta, officia ab. Et, distinctio voluptatem! Aliquid, laborum porro.</Text>

            </View>
        </SafeAreaView>
    );
}

// What is Flexbox?
// How does justify_content and align_items behave?
// justify_content => moves item along main axis
// align_items => move items along cross axis

// Web Development
// main axis: horizontal
// cross axis: vertical

// 

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 30,
        fontWeight: '600',
        color: '#33372C',
    },
    headerArea: {
        alignItems: 'center',
        margin: 10,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 10,
        padding: 10,
    },
    appBg: {
        backgroundColor: '#E9EFEC',
        flex: 1,
    },

    subHeading: {
        fontSize: 25,
        fontWeight: '400',
        color: '#000000',
    },
    
    card: {
        width: 250,
        height: 250,
        alignItems: 'center',
        backgroundColor: '#7695FF',
        borderRadius: 10,
        margin: 10,
        elevation: 10,
        overflow: 'hidden',
        padding: 10,
    },

    cardTitle: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 15,
    },

    sep: {
        height: 2,
        width: '90%',
        backgroundColor: '#000000',
        marginBottom: 10,
    },

    cardTxt: {
        fontSize: 20,
        fontWeight: '300',
    },
});
 
export default Main;