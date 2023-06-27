
import React from 'react';
import {ImageBackground, StyleSheet, Text,Image, View, Button, Alert, 
      SafeAreaView,StatusBar, TouchableOpacity} from 'react-native';


const Sobre = () => (
  <SafeAreaView>
      <StatusBar/>
      < View style={styles.container}> 
      < View style={styles.box}> 
     <TouchableOpacity>
         <Text style={styles.text}>Sobre</Text>
       <Image source={require('./assets/cel.svg')} resizeMode = 'center' 
              style={styles.image1}>
        </Image > 
        <Text style={styles.text1}>Este app foi desenvolvido com o objetivo de colocar o 
        cidadão como um colaborador ativo para a sociedade.
Aqui você cidadão pode reportar um problemas como: buracos, entulhos,  problemas com 
iluminação entre outros, para que seja solicitado o reparo ao órgão responsável, 
contribuindo assim para uma cidade mais limpa e bem cuidade, sendo um cidadão consciente.

</Text>
     </TouchableOpacity>   
     <TouchableOpacity style={styles.button}
              onPress={() => Alert.alert(  )}>     
               <Text style={styles.text2}>Início</Text> 
               <Image source={require('./assets/ini.svg')} resizeMode = 'center' 
                       style={styles.image3}> 
        </Image >  
      </TouchableOpacity>  
       <Image source={require('./assets/mous.svg')} resizeMode="cover" 
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
    borderBottomRightRadius: 30,  
    borderBottomLeftRadius: 30,
    opacity:"100%", 
    shadowRadius:50
  }, 
  text: {
    fontSize: 40,
    color: '#414141', 
    marginTop:'25%',  
    marginLeft :'0%',
    textAlign:'center',
    justifyContent:'center',
    fontFamily:'Arya',
    
  },  
  text1:{
    fontSize: 25,
    color: '#414141', 
     marginRight:'8%',
    textAlign:'center',
    fontFamily:'Arya',
    marginLeft:35,
    marginVertical:'35%',
     
  }, 
  text2:{
    fontSize: 20,
    color: '#414141', 
    justifyContent:'space-around',
    textAlign:'center',
    fontFamily:'Arya',
    marginLeft:30
     
  }, 
  button: {  
    padding: 4,  
    borderRadius:25, 
    width:110, 
    backgroundColor: '#25D366',    
    marginVertical:-20, 
    marginLeft:25,   
   }, 
  image:    { 
    width: 60, 
    height: 125, 
    marginTop:'-20%', 
    marginLeft:'40%' 
},
  image1:    { 
    marginTop:-33,      
    width: 25, 
    height: 25,       
   marginLeft:'20%',
},
image3:    { 
  width: 25, 
  height: 25, 
  marginTop:'-25%', 
  marginLeft:'5%' 
},        
});

export default Sobre;
