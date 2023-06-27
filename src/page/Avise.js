
import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text,Image, View, Button, Alert, 
      SafeAreaView,StatusBar, TouchableOpacity} from 'react-native';

  

const Avise = () => (
  

  <SafeAreaView>
      <StatusBar/>
      < View style={styles.container}> 
      < View style={styles.box}> 
      
  <Text style={styles.text}>Avise-nos</Text>

      <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}> Envie Mensagem</Text> 
           <Image source={require('./assets/lap.png')} resizeMode = 'center' 
                  style={styles.image1}>
           </Image >        
      </TouchableOpacity>   
        
      <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>Tire Uma Foto</Text> 
           <Image source={require('./assets/fot.png')} resizeMode = 'center' 
                   style={styles.image1}>
            </Image >        
      </TouchableOpacity> 

       <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>Grave Um Video</Text> 
           <Image source={require('./assets/cam.png')} resizeMode = 'center' 
                   style={styles.image1}> 
             </Image >        
      </TouchableOpacity> 
       

<Image source={require('./assets/depa.png')} resizeMode="cover" 
      style={styles.image}>
     </Image >
      
      </View>
      </View>
      </SafeAreaView>
);
 
  
const styles = StyleSheet.create({
  container: {
    flex:5, 
    marginHorizontal: 0,
    marginVertical:0,
    backgroundColor: '#C8EAF9',
    opacity:"89%",
    
  },
  box: {    
    backgroundColor: '#34B7F1',
    height:205,
    width:390,
    borderBottomRightRadius: 30,  borderBottomLeftRadius: 30,
    opacity:"100%", 
    shadowRadius:50
  }, 
  text: {
    fontSize: 45,
    color: '#414141', 
    marginTop:'25%',  
    marginLeft :'0%',
    textAlign:'center',
    justifyContent:'center',
    fontFamily:'Arya',
    
  },  
  text1:{
    fontSize: 22,
    color: '#414141', 
    justifyContent:'space-around',
    textAlign:'center',
    fontFamily:'Arya',
    marginLeft:35
     
  }, 
  button1: {
    fontSize: 50,
    flex: 1,     
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 35,
    borderRadius:50,
    width:266,
    marginLeft:60,
    marginTop:120,
    marginVertical:-100,
    opacity:'100%',
    shadowOpacity: 0.2, 
    shadowRadius:50, 
   }, 
  image:    { 
    width: 150, 
    height: 119, 
    marginTop:'50%', 
    marginLeft:'30%' 
},
  image1:    { 
    marginTop:-25,      
    width: 25, 
    height: 25,       
    marginRight: 170
},
         
});

export default Avise;

 