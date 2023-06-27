
import React from 'react';
import { TouchableOpacity,Image,SafeAreaView, StyleSheet, TextInput, Text, ImageBackground,Button, View} from 'react-native';
 

const Foto = () => {
  const [text0, onChangeText0] = React.useState(  );
   
  
  return ( 
    <SafeAreaView> 
      < View style={styles.container}> 
      < View style={styles.box}>  
      </View>

    <View>
      <Text style={styles.text3}>Tire Uma Foto</Text>
      <Image source={require('./assets/fot.svg')} resizeMode = 'center' style={styles.image}>
            </Image > 
      <View style={styles.button1} onPress={() => Alert.alert(  )}>     
           <Text style={styles.text1}>CEP:</Text> 
           <Image source={require('./assets/loc.svg')} resizeMode = 'center' style={styles.image4}>
            </Image > 
         <TextInput            
           editable  numberOfLines={1}
         style={{marginLeft: 55,marginTop:-27, width:140, height: 30, backgroundColor:'#fff', 
                  borderWidth: 1, opacity:'80%', }} onChangeText={onChangeText0}
          value={text0}  placeholder=" "   keyboardType='default' />     
      </View>  
      <View>
      <TouchableOpacity style={styles.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={styles.text4}>Minha Localização</Text>
           <Image source={require('./assets/gps.svg')} resizeMode = 'center' style={styles.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>  
      <View>
      <TouchableOpacity style={styles.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={styles.text4}>Tirar Foto</Text>
           <Image source={require('./assets/fot.svg')} resizeMode = 'center' style={styles.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>  
       </View>

       <Image source={require('./assets/fotgr.svg')} resizeMode = 'center' 
              style={styles.image2}>
      </Image > 
      <View> 
     <TouchableOpacity style={styles.button5}
              onPress={() => Alert.alert(  )}>     
               <Text style={styles.text5}>Voltar</Text> 
               <Image source={require('./assets/vol.svg')} resizeMode = 'center' 
                        style={styles.image5}> 
               </Image >  
      </TouchableOpacity>   
      </View> 
      <View>
     <TouchableOpacity style={styles.button6}
              onPress={() => Alert.alert(  )}>     
               <Text style={styles.text5}>Enviar</Text> 
               <Image source={require('./assets/avi.svg')} resizeMode = 'center' 
                       style={styles.image5}> 
         </Image >  
        </TouchableOpacity>  

        </View>
       </View> 
    </SafeAreaView>       
  );
};
  
const styles = StyleSheet.create({   
 container: {
      flex:5,     
      marginHorizontal: 0,
      marginVertical:0,
      backgroundColor: '#C8EAF9',
      opacity:"90%", 
    },
 box: {    
      backgroundColor: '#34B7F1',
      height:205,
      width:390,
      borderBottomRightRadius: 30,  
      borderBottomLeftRadius: 30,
      opacity:"100%", 
      shadowRadius:50, 
    }, 
 text3: {
      fontSize: 40,
      color: '#414141', 
      marginVertical:-95, 
      marginLeft :'0%',
      textAlign:'center',
      justifyContent:'center',
      fontFamily:'Arya', 
    },  
 text4: {
      fontSize: 20,
      color: '#414141',   
      marginLeft :'-4%',
      textAlign:'center',
      justifyContent:'center',
      fontFamily:'Arya',  
    },  
 text1:{
      fontSize: 18,
      color: '#414141', 
      marginLeft:-130, 
      fontFamily:'Arya', 
       marginVertical:4
    },  
 button1: {  
      alignItems: 'center',
      backgroundColor: '#25D366',
      padding: 15,
      borderRadius:50,
      width:266,
      marginLeft:60,
      marginVertical:25,
      opacity:'100%',
      shadowOpacity: 0.2, 
      shadowRadius:50, 
     },  
 button3: {  
      alignItems: 'center',
      backgroundColor: '#25D366',
      padding: 15,
      borderRadius:50,
      width:266,
      marginLeft:60,
      marginTop:-5,
      opacity:'100%',
      shadowOpacity: 0.2, 
      shadowRadius:50, 
      marginVertical:25,
     }, 
 image:    { 
      width: 140, 
      height: 145,  
      marginLeft:'-10%' 
  },   
 image2:    {
    width: 160, 
    height: 125, 
    marginTop:'30%', 
    marginLeft:'30%'  
},
  image3:    { 
    marginTop:-23,      
    width: 25, 
    height: 25,       
    marginRight: 205
},      
image4:    { 
  marginTop:-28,      
  width: 25, 
  height: 25,       
  marginRight: 205
},    
text5:{
  fontSize: 20,
  color: '#414141', 
  justifyContent:'space-around',
  textAlign:'center',
  fontFamily:'Arya',
  marginLeft:30 
}, 
button5: { 
  padding: 4,  
  borderRadius:25, 
  width:110, 
  backgroundColor: '#25D366',    
  marginVertical:60, 
  marginLeft:25  
 },  
button6: { 
  padding: 4,  
  borderRadius:25, 
  width:110, 
  backgroundColor: '#25D366',    
  marginVertical:-90, 
  marginLeft:250  
   }, 
image5:    {  
  width: 25, 
  height: 25, 
  marginTop:'-25%', 
  marginLeft:'5%' 
},   
});

export default Foto; 
