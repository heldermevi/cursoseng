

import React from 'react';
import {ImageBackground, StyleSheet, Text,Image, View, Button, Alert, 
      SafeAreaView,StatusBar, TouchableOpacity} from 'react-native';


const Iniciando = () => (
  <SafeAreaView>
      <StatusBar/>
      < View style={styles.container}>    
       <Image source={require('./assets/humn.svg')} resizeMode = 'center' 
              style={styles.image1}>
        </Image >   
        <Text style={styles.text1}>Cidadão Consciente </Text> 
        <Image source={require('./assets/carr.svg')} resizeMode="cover" 
              style={styles.image}>
         </Image > 
      </View> 
      </SafeAreaView>
);
 
  
const styles = StyleSheet.create({
  container: {
    flex:5, 
    width:390,
    marginHorizontal: 0,
    marginVertical:0,
    backgroundColor: '#78D6FF',
    opacity:"90%", 
   }, 
  text1:{
    fontSize: 35,
    color: '#414141', 
    marginRight:'7%',
    textAlign:'center',
    fontFamily:'Arya',
    marginLeft:35,
    marginVertical:'90%', 
  },   
  image:    { 
    width: 25, 
    height: 25, 
    marginTop:'-85%', 
    marginLeft:'45%' 
},
  image1:    { 
    marginVertical:-300,      
    width: 150, 
    height: 150,       
    marginLeft:'30%',
    marginTop:190,

},      
});

export default Iniciando;

 