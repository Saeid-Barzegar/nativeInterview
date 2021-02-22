import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const MasterPage = props => {
    const { 
        content, 
        pageTitle,
        pageSubTitle, 
        headerLeftIcon,
        headerRightIcon,
        footer,
    } = props || {};
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{backgroundColor: "#ffca84", flex: 0}} />
      <SafeAreaView style={{backgroundColor: "transparent", flex: 1}}>
        <View style={styles.header}>
            <View style={styles.headerSides}>
                {
                    headerLeftIcon || 
                    <TouchableWithoutFeedback onPress={()=> Alert.alert("Back")}>
                        <View style={styles.backButton}>
                            <Text>Back</Text>
                        </View>
                    </TouchableWithoutFeedback>
                }
            </View>
            {
                pageTitle && (
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>{pageTitle}</Text>
                        { pageSubTitle && <Text>{pageSubTitle}</Text>}
                    </View>
                )
            }
            <View style={styles.headerSides}>{headerRightIcon}</View>
        </View>
        <ScrollView style={styles.scrollView}>
            {content}
        </ScrollView>
        {footer && <View style={styles.footer}>{footer}</View>}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1
  },
  header:{
    width: '100%',
    height: 70,
    backgroundColor: "#ffca84",
    flexDirection: "row"
  },
  headerContainer:{
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  headerSides:{
    width: 70, 
  },
  backButton: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 16, 
    fontWeight: "bold"
  },
  subTitle:{
    fontSize: 14, 
  },
  footer:{
    height: 70, 
    width: "100%",
  }
});

export default MasterPage;
