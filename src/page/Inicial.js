
import React from 'react';
import {ImageBackground, StyleSheet, Text,Image, View, Button, Alert, 
      SafeAreaView,StatusBar, TouchableOpacity} from 'react-native';


const inicial = () => (
  <SafeAreaView>
      <StatusBar/>
      < View style={styles.container}> 
      < View style={styles.box}> 
      
  <Text style={styles.text}>Bem-Vindo</Text>

      <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>Avise-nos</Text> 
           <Image source={require('./assets/tel.png')} resizeMode = 'center' 
                  style={styles.image1}>
           </Image >        
      </TouchableOpacity>   
      
      <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>Como Usar</Text> 
           <Image source={require('./assets/chap.png')} resizeMode = 'center' 
                   style={styles.image1}>
            </Image >        
      </TouchableOpacity> 

       <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>Sobre</Text> 
           <Image source={require('./assets/cel.png')} resizeMode = 'center' 
                   style={styles.image1}> 
             </Image >        
      </TouchableOpacity> 
      <TouchableOpacity style={styles.button1}  
           onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>Suporte</Text> 
           <Image source={require('./assets/fer.png')} resizeMode = 'center' 
      style={styles.image1}>
     </Image >        
      </TouchableOpacity> 

<Image source={require('./assets/bnk.png')} resizeMode="cover" 
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
    fontSize: 50,
    color: '#414141', 
    marginTop:'20%',  
    marginLeft :'20%',
    justifyContent:'center',
    fontFamily:'Arya',
    
  },  
  text1:{
    fontSize: 28,
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
    width: 200, 
    height: 200, 
    marginTop:'30%', 
    marginLeft:'25%' 
},
  image1:    { 
    marginTop:-25,      
    width: 25, 
    height: 25,       
    marginRight: 170
},
         
});

export default inicial;
