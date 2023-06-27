import React from 'react';
import {ImageBackground, StyleSheet, Text,Image, View, Button, Alert, 
      SafeAreaView,StatusBar, TouchableOpacity} from 'react-native';


const Enviado = () => (
  <SafeAreaView>
      <StatusBar/>
      < View style={styles.container}> 
      < View style={styles.box}> 
     <TouchableOpacity>
         <Text style={styles.text}>Obrigado</Text>
       <Image source={require('./assets/img1.svg')} resizeMode = 'center' 
              style={styles.image1}>
        </Image > 
        <Image source={require('./assets/img2.svg')} resizeMode = 'center' 
              style={styles.image3}>
        </Image > 
        <Text style={styles.text1}>Enviado Com Sucesso </Text>
     </TouchableOpacity>   
     
         
      
     <TouchableOpacity style={styles.button}
              onPress={() => Alert.alert(  )}>     
               <Text style={styles.text2}>Início</Text> 
               <Image source={require('./assets/ini.svg')} resizeMode = 'center' 
                       style={styles.image4}> 
        </Image >  
      </TouchableOpacity>  
       <Image source={require('./assets/pais2.svg')} resizeMode="cover" 
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
    fontSize: 35,
    color: '#414141', 
    marginRight:'8%',
    textAlign:'center',
    fontFamily:'Arya',
    marginLeft:35,
    marginVertical:'10%',
     
     
  }, 
  text2:{
    fontSize: 20,
    color: '#414141', 
    justifyContent:'space-around',
    textAlign:'center',
    fontFamily:'Arya',
    marginLeft:30
     
  }, 
  text3:{
    fontSize: 18,
    color: '#414141', 
    marginHorizontal:'-25%',
    textAlign:'left',
    fontFamily:'Arya',
    marginLeft:60,
    marginTop:-10,   
    marginVertical:-10
     
  }, 
  button: {  
    padding: 4,  
    borderRadius:25, 
    width:110, 
    backgroundColor: '#25D366',    
    marginVertical:230, 
    marginLeft:25,   
   }, 
  image:    { 
    width: 160, 
    height: 125, 
    marginTop:'-120%', 
    marginLeft:'30%' 
},
  image1:    { 
    marginVertical:-190,      
    width: 150, 
    height: 150,       
    marginLeft:'30%',
    marginTop:130,

},
image3:    { 
  width: 150, 
  height: 150, 
  marginTop:'13%', 
  marginLeft:'30%', 
   
}, 
image4:    { 
  width: 30, 
  height: 20, 
  marginTop:'-20%', 
  marginLeft:'5%' 
   
},       
});

export default Enviado;