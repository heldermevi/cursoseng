import * as React from 'react';
import { Button, View,Container,TextInput, Text,StyleSheet, TouchableOpacity,Image,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Inicial({ navigation }) {
  return (<View>
    <SafeAreaView>
       
      < View style={stylesIni.container}> 
      < View style={stylesIni.box}> 
      
  <Text style={stylesIni.text}>Bem-Vindo</Text>

      <TouchableOpacity style={stylesIni.button1}  
           onPress={() => navigation.navigate( Departamento )}>     
           <Text style={stylesIni.text1}>Avise-nos</Text> 
           <Image source={require('./assets/tel.png')} resizeMode = 'center' 
                  style={stylesIni.image1}>
           </Image >        
      </TouchableOpacity>   
      
      <TouchableOpacity style={stylesIni.button1}  
           onPress={() => navigation.navigate(Comusar)}>     
           <Text style={stylesIni.text1}>Como Usar</Text> 
           <Image source={require('./assets/chap.png')} resizeMode = 'center' 
                   style={stylesIni.image1}>
            </Image >        
      </TouchableOpacity> 

       <TouchableOpacity style={stylesIni.button1}  
           onPress={() => navigation.navigate( Sobre )}>     
           <Text style={stylesIni.text1}>Sobre</Text> 
           <Image source={require('./assets/cel.png')} resizeMode = 'center' 
                   style={stylesIni.image1}> 
             </Image >        
      </TouchableOpacity> 
      
      <TouchableOpacity style={stylesIni.button1}  
           onPress={() => navigation.navigate( Suporte )}>     
           <Text style={stylesIni.text1}>Suporte</Text> 
           <Image source={require('./assets/fer.png')} resizeMode = 'center' 
      style={stylesIni.image1}>
     </Image >        
      </TouchableOpacity> 

<Image source={require('./assets/bnk.png')} resizeMode="cover" 
      style={stylesIni.image}>
     </Image >
      
      </View>
      </View>
      </SafeAreaView>
        </View>
  );
          };
          

 function Departamento ({ navigation }) {
    return (
      <View>
  <SafeAreaView>
       
      < View style={stylesDep.container}> 
      < View style={stylesDep.box}> 
      
  <Text style={stylesDep.text}>Avise-nos Departamento</Text>

      <TouchableOpacity style={stylesDep.button1}  
           onPress={() =>  navigation.navigate( Avise )}>  
           <Text style={stylesDep.text1}>Iluminação</Text> 
           <Image source={require('./assets/luz.svg')} resizeMode = 'center' 
                  style={stylesDep.image1}>
           </Image >        
      </TouchableOpacity>   
      
      <TouchableOpacity style={stylesDep.button1}  
           onPress={() => navigation.navigate( Avise )}>  
           <Text style={stylesDep.text1}>Água e Esgoto</Text> 
           <Image source={require('./assets/agu.svg')} resizeMode = 'center' 
                   style={stylesDep.image1}>
            </Image >        
      </TouchableOpacity> 

       <TouchableOpacity style={stylesDep.button1}  
           onPress={() => navigation.navigate( Avise )}>  
           <Text style={stylesDep.text1}>Obras</Text> 
           <Image source={require('./assets/cas.svg')} resizeMode = 'center' 
                   style={stylesDep.image1}> 
             </Image >        
      </TouchableOpacity> 
      <TouchableOpacity style={stylesDep.button1}  
           onPress={() => navigation.navigate( Avise )}> 
           <Text style={stylesDep.text1}>Outros</Text> 
           <Image source={require('./assets/etc.svg')} resizeMode = 'center' 
      style={stylesDep.image1}>
     </Image >        
      </TouchableOpacity> 
      <TouchableOpacity style={stylesDep.button03}
              onPress={() =>navigation.navigate( Inicial )}>  
               <Text style={stylesDep.text03}>Início</Text> 
               <Image source={require('./assets/ini.svg')} resizeMode = 'center' 
                       style={stylesDep.image03}> 
         </Image >  
        </TouchableOpacity> 

<Image source={require('./assets/depa.svg')} resizeMode="cover" 
      style={stylesDep.image33}>
     </Image >
      
      </View>
      </View>
      </SafeAreaView>
      </View>
            );
 }
          
function Avise({ navigation }) {
  return (
    <View>
       <SafeAreaView>
      
      < View style={stylesAvi.container}> 
      < View style={stylesAvi.box}> 
      
  <Text style={stylesAvi.text}>Avise-nos</Text>

      <TouchableOpacity style={stylesAvi.button1}  
           onPress={() => navigation.navigate( Mensagem )}>     
           <Text style={stylesAvi.text1}> Envie Mensagem</Text> 
           <Image source={require('./assets/lap.png')} resizeMode = 'center' 
                  style={stylesAvi.image1}>
           </Image >        
      </TouchableOpacity>   
        
      <TouchableOpacity style={stylesAvi.button1}  
           onPress={() => navigation.navigate( Foto )}>     
           <Text style={stylesAvi.text1}>Tire Uma Foto</Text> 
           <Image source={require('./assets/fot.png')} resizeMode = 'center' 
                   style={stylesAvi.image1}>
            </Image >        
      </TouchableOpacity> 

       <TouchableOpacity style={stylesAvi.button1}  
           onPress={() => navigation.navigate( Video )}>     
           <Text style={stylesAvi.text1}>Grave Um Vídeo</Text> 
           <Image source={require('./assets/cam.png')} resizeMode = 'center' 
                   style={stylesAvi.image1}> 
             </Image >        
      </TouchableOpacity> 
      <TouchableOpacity style={stylesAvi.button03}
              onPress={() => navigation.navigate(Inicial )}>  
               <Text style={stylesDep.text03}>Início</Text> 
               <Image source={require('./assets/ini.png')} resizeMode = 'center' 
                       style={stylesDep.image03}> 
         </Image >  
        </TouchableOpacity> 
       

<Image source={require('./assets/depa.png')} resizeMode="cover" 
      style={stylesAvi.image33}>
     </Image >
      
      </View>
      </View>
      </SafeAreaView>
      </View>
  );
}

function Comusar({ navigation }) {
  return (
    <View> 
      <SafeAreaView>
     
    < View style={stylesUsar.container}> 
    < View style={stylesUsar.box}> 
  
       <Text style={stylesUsar.text}>Como Usar o App</Text>
      
      <Text style={stylesUsar.text1}>Este app é foi desenvolvido para que seja simple e prático de usar, basta selecionar a opção que deseja, em seguida digitar o “CEP”, ou a opção “Minha Localização”,  do local onde está o problema,  e enviar uma msg, uma foto ou um vídeo, e pronto.
          </Text>
    
          <TouchableOpacity style={stylesUsar.button}
              onPress={() =>  navigation.navigate( Inicial )}>    
               <Text style={stylesUsar.text2}>Início</Text> 
               <Image source={require('./assets/ini.png')} resizeMode = 'center' 
                       style={stylesUsar.image3}> 
         </Image >  
        </TouchableOpacity>  
<Image source={require('./assets/psgm.png')} resizeMode="cover" 
      style={stylesUsar.image}>
     </Image > 

    </View>
    </View>
    </SafeAreaView>
    </View>
  );
}

function Sobre({ navigation }) {
  return (
    <View> 
      <SafeAreaView>
       
      < View style={stylesSbr.container}> 
      < View style={stylesSbr.box}> 
     <TouchableOpacity>
         <Text style={stylesSbr.text}>Sobre</Text>
       <Image source={require('./assets/cel.svg')} resizeMode = 'center' 
              style={stylesSbr.image1}>
        </Image > 
        <Text style={stylesSbr.text1}>Este app foi desenvolvido com o objetivo de colocar o 
        cidadão como um colaborador ativo para a sociedade.
Aqui você cidadão pode reportar um problemas como: buracos, entulhos,  problemas com 
iluminação entre outros, para que seja solicitado o reparo ao órgão responsável, 
contribuindo assim para uma cidade mais limpa e bem cuidade, sendo um cidadão consciente.

</Text>
     </TouchableOpacity>   
     <TouchableOpacity style={stylesSbr.button}
              onPress={() => navigation.navigate( Inicial )}> 
               <Text style={stylesSbr.text2}>Início</Text> 
               <Image source={require('./assets/ini.svg')} resizeMode = 'center' 
                       style={stylesSbr.image3}> 
        </Image >  
      </TouchableOpacity>  
       <Image source={require('./assets/mous.svg')} resizeMode="cover" 
              style={stylesSbr.image}>
         </Image >
      
      </View>
      </View>
      </SafeAreaView>
    </View>
  );
}



function Suporte({ navigation }) {
  return (
    <View>
      <SafeAreaView>
       
      < View style={stylesSpr.container}> 
      < View style={stylesSpr.box}> 
     <TouchableOpacity>
         <Text style={stylesSpr.text}>Suporte</Text>
       <Image source={require('./assets/cel.svg')} resizeMode = 'center' 
              style={stylesSpr.image1}>
        </Image > 
        <Text style={stylesSpr.text1}>Caso tenha algum problema com este app, ou sugestão, 
        você cidadão pode estar entrando em contato com nossos canais de atendimento abaixo.
        </Text>
     </TouchableOpacity>   
     <TouchableOpacity>
         <Text style={stylesSpr.text3}>Telefone: (11) 1111-11111</Text>
       <Image source={require('./assets/tel.svg')} resizeMode = 'center' 
              style={stylesSpr.image4}>
        </Image > 
         
     </TouchableOpacity> 
       
     <TouchableOpacity>
         <Text style={stylesSpr.text3}>E-mail: suporte@orgaoresponsavel.com</Text>
       <Image source={require('./assets/@.svg')} resizeMode = 'center' 
              style={stylesSpr.image4}>
        </Image > 
         
     </TouchableOpacity> 
       
     <TouchableOpacity>
         <Text style={stylesSpr.text3}>Segunda á Sexta</Text>
       <Image source={require('./assets/calnd.svg')} resizeMode = 'center' 
              style={stylesSpr.image4}>
        </Image > 
         
     </TouchableOpacity> 
     
     <TouchableOpacity>
         <Text style={stylesSpr.text3}>Horário: Das 8:00  ás 18:00</Text>
       <Image source={require('./assets/clocl.svg')} resizeMode = 'center' 
              style={stylesSpr.image4}>
        </Image > 
         
     </TouchableOpacity>  
     <TouchableOpacity style={stylesSpr.button}
              onPress={() =>navigation.navigate( Inicial )}> 
               <Text style={stylesSpr.text2}>Início</Text> 
               <Image source={require('./assets/ini.svg')} resizeMode = 'center' 
                       style={stylesSpr.image3}> 
        </Image >  
      </TouchableOpacity>  
       <Image source={require('./assets/mous.svg')} resizeMode="cover" 
              style={stylesSpr.image}>
         </Image >
      
      </View>
      </View>
      </SafeAreaView>

    </View>
  );
}


function Video({ navigation }) {
   const [text07, onChangeText07] = React.useState(  );
     
  return ( 
    <View>
    <SafeAreaView> 
      < View style={stylesVid.container}> 
      < View style={stylesVid.box}>  
      </View>

    <View>
      <Text style={stylesVid.text3}>Grave Um Vídeo</Text>
      <Image source={require('./assets/cam.png')} resizeMode = 'center' style={stylesVid.image}>
            </Image > 
      <View style={stylesVid.button1} onPress={() => Alert.alert(  )}>     
           <Text style={stylesVid.text1}>CEP:</Text> 
           <Image source={require('./assets/loc.png')} resizeMode = 'center' style={stylesVid.image4}>
            </Image > 
         <TextInput            
           editable  numberOfLines={1}
         style={{marginLeft: 55,marginTop:-27, width:140, height: 30, backgroundColor:'#fff', 
                  borderWidth: 1, opacity:'80%', }} onChangeText={onChangeText07}
          value={text07}  placeholder=" "   keyboardType='default' />     
      </View>  
      <View>
      <TouchableOpacity style={stylesVid.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={stylesVid.text4}>Minha Localização</Text>
           <Image source={require('./assets/gps.png')} resizeMode = 'center' style={stylesVid.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>  
      <View>
      <TouchableOpacity style={stylesVid.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={stylesVid.text4}>Gravar Vídeo</Text>
           <Image source={require('./assets/cam.png')} resizeMode = 'center' style={stylesVid.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>  
       </View>

       <Image source={require('./assets/hom.png')} resizeMode = 'center' 
              style={stylesVid.image2}>
      </Image > 
      <View> 
     <TouchableOpacity style={stylesVid.button5}
              onPress={() => navigation.navigate( Avise )}>     
               <Text style={stylesVid.text5}>Voltar</Text> 
               <Image source={require('./assets/vol.png')} resizeMode = 'center' 
                        style={stylesVid.image5}> 
               </Image >  
      </TouchableOpacity>   
      </View> 
      <View>
     <TouchableOpacity style={stylesVid.button6}
              onPress={() => navigation.navigate( Enviado )}> 
               <Text style={stylesVid.text5}>Enviar</Text> 
               <Image source={require('./assets/avi.png')} resizeMode = 'center' 
                       style={stylesVid.image5}> 
         </Image >  
        </TouchableOpacity>  

        </View>
       </View> 
    </SafeAreaView> 
    </View>
  );
}


function Foto({ navigation }) {
  const [text08, onChangeText08] = React.useState(  );
     
  return ( 
    <View>
    <SafeAreaView> 
      < View style={stylesFt.container}> 
      < View style={stylesFt.box}>  
      </View>

    <View>
      <Text style={stylesFt.text3}>Tire Uma Foto</Text>
      <Image source={require('./assets/fot.png')} resizeMode = 'center' style={stylesFt.image}>
            </Image > 
      <View style={stylesFt.button1} onPress={() => Alert.alert(  )}>     
           <Text style={stylesFt.text1}>CEP:</Text> 
           <Image source={require('./assets/loc.png')} resizeMode = 'center' style={stylesFt.image4}>
            </Image > 
         <TextInput            
           editable  numberOfLines={1}
         style={{marginLeft: 55,marginTop:-27, width:140, height: 30, backgroundColor:'#fff', 
                  borderWidth: 1, opacity:'80%', }} onChangeText={onChangeText08}
          value={text08}  placeholder=" "   keyboardType='default' />     
      </View>  
      <View>
      <TouchableOpacity style={stylesFt.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={stylesFt.text4}>Minha Localização</Text>
           <Image source={require('./assets/gps.png')} resizeMode = 'center' style={stylesFt.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>  
      <View>
      <TouchableOpacity style={stylesFt.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={stylesFt.text4}>Tirar Foto</Text>
           <Image source={require('./assets/fot.png')} resizeMode = 'center' style={stylesFt.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>  
       </View>

       <Image source={require('./assets/fotgr.png')} resizeMode = 'center' 
              style={stylesFt.image2}>
      </Image > 
      <View> 
     <TouchableOpacity style={stylesFt.button5}
              onPress={() => navigation.navigate( Avise )}>   
               <Text style={stylesFt.text5}>Voltar</Text> 
               <Image source={require('./assets/vol.png')} resizeMode = 'center' 
                        style={stylesFt.image5}> 
               </Image >  
      </TouchableOpacity>   
      </View> 
      <View>
     <TouchableOpacity style={stylesFt.button6}
              onPress={() => navigation.navigate( Enviado )}> 
               <Text style={stylesFt.text5}>Enviar</Text> 
               <Image source={require('./assets/avi.png')} resizeMode = 'center' 
                       style={stylesFt.image5}> 
         </Image >  
        </TouchableOpacity>  

        </View>
       </View> 
    </SafeAreaView> 
    </View>
  );
}



function Mensagem({ navigation }) {
  const [text09, onChangeText09] = React.useState(  );
  const [text12, onChangeText12] = React.useState('Assunto :');
  const [text13, onChangeText13] = React.useState('Digite Sua Mensagem');
  
  return ( 
    <View>
    <SafeAreaView> 
      < View style={stylesMns.container}> 
      < View style={stylesMns.box}>  
      </View>

    <View>
      <Text style={stylesMns.text3}> Enviar Mensagem</Text>
      <Image source={require('./assets/lap.png')} resizeMode = 'center' style={stylesMns.image}>
            </Image > 
      <View style={stylesMns.button1} onPress={() => Alert.alert(  )}>     
           <Text style={stylesMns.text1}>CEP:</Text> 
           <Image source={require('./assets/loc.png')} resizeMode = 'center' style={stylesMns.image4}>
            </Image > 
         <TextInput            
           editable  numberOfLines={1}
         style={{marginLeft: 55,marginTop:-27, width:140, height: 30, backgroundColor:'#fff', 
                  borderWidth: 1, opacity:'80%', }} onChangeText={onChangeText09}
          value={text09}  placeholder=" "   keyboardType='default' />     
      </View>  
      <View>
      <TouchableOpacity style={stylesMns.button3}  onPress={() => Alert.alert(  )}>     
           <Text style={stylesMns.text4}>Minha Localização</Text>
           <Image source={require('./assets/gps.png')} resizeMode = 'center' style={stylesMns.image3}>
            </Image > 
      </TouchableOpacity>        
      </View>   

      <TextInput
        multiline  editable  numberOfLines={2}
        style={{marginLeft: 60,marginTop: 30, backgroundColor:'#25D366E3', borderWidth: 1, 
                 width:270, height: 40, borderRadius:5 ,paddingEnd:50,  textAlign: "left" }}  
            onChangeText={onChangeText12}
            value={text12}
            placeholder="Assunto:"
            keyboardType="default" />
      <TextInput
        multiline
        numberOfLines={5}        
        style={{ marginLeft: 60,  marginTop:25 , backgroundColor:'#25D366E3', borderWidth: 1,
                width:270,  height: 245,  padding: 10, textAlign: "left" , borderRadius:5}}
            onChangeText={onChangeText13}
            value={ text13}
            placeholder="Digite Sua Mensagem"
            keyboardType="default"
      />  </View>
      <View>

     <TouchableOpacity style={stylesMns.button5}
              onPress={() => navigation.navigate( Avise )}>   
               <Text style={stylesMns.text5}>Voltar</Text> 
               <Image source={require('./assets/vol.png')} resizeMode = 'center' 
                        style={stylesMns.image5}> 
               </Image >  
      </TouchableOpacity>   
      </View> 
      <View>
     <TouchableOpacity style={stylesMns.button6}
              onPress={() =>  navigation.navigate( Enviado )}> 
               <Text style={stylesMns.text5}>Enviar</Text> 
               <Image source={require('./assets/avi.png')} resizeMode = 'center' 
                       style={stylesMns.image5}> 
         </Image >  
        </TouchableOpacity>  

        </View>
       </View> 
    </SafeAreaView>  
    </View>
  );
}


function Enviado({ navigation }) {
  return (
    <View>
      <SafeAreaView>
       
      < View style={stylesEvd.container}> 
      < View style={stylesEvd.box}> 
     <TouchableOpacity>
         <Text style={stylesEvd.text}>Obrigado</Text>
       <Image source={require('./assets/img1.png')} resizeMode = 'center' 
              style={stylesEvd.image1}>
        </Image > 
        <Image source={require('./assets/img2.png')} resizeMode = 'center' 
              style={stylesEvd.image3}>
        </Image > 
        <Text style={stylesEvd.text1}>Enviado Com Sucesso </Text>
     </TouchableOpacity>  

     <TouchableOpacity style={stylesEvd.button}
              onPress={() => navigation.navigate( Inicial )}>  
               <Text style={stylesEvd.text2}>Início</Text> 
               <Image source={require('./assets/ini.png')} resizeMode = 'center' 
                       style={stylesEvd.image4}> 
        </Image >  
      </TouchableOpacity>  
       <Image source={require('./assets/pais2.png')} resizeMode="cover" 
              style={stylesEvd.image}>
         </Image >
      
      </View>
      </View>
      </SafeAreaView>

    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen   options={{ title:'', headerTransparent:true, headerShown: false}} 
                      name="Inicial" component={Inicial} />
           <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Departamento" component={Departamento} />
           <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}} 
                      name="Avise" component={Avise} />
           <Stack.Screen options={{ title:'', headerTransparent:true,headerShown: false}} 
                      name="Comusar" component={Comusar} />       
          <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Sobre" component={Sobre} />
          <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Suporte" component={Suporte} />
          <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Video" component={Video} />           
          <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Foto" component={Foto} />
          <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Mensagem" component={Mensagem} />
          <Stack.Screen  options={{ title:'', headerTransparent:true,headerShown: false}}  
                      name="Enviado" component={Enviado} />
    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

 
const stylesEvd = StyleSheet.create({
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



  
const stylesMns = StyleSheet.create({   
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
    marginTop:15,
    opacity:'100%',
    shadowOpacity: 0.2, 
    shadowRadius:50, 
   }, 
  image:    { 
    width: 140, 
    height: 145,  
    marginLeft:'-10%' 
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
marginVertical:40, 
marginLeft:25  
},  
button6: { 
padding: 4,  
borderRadius:25, 
width:110, 
backgroundColor: '#25D366',    
marginVertical:-70, 
marginLeft:250  
 }, 
image5:    {  
width: 25, 
height: 25, 
marginTop:'-25%', 
marginLeft:'5%' 
},   
});


const stylesFt = StyleSheet.create({   
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

 

const stylesVid = StyleSheet.create({   
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
     height: 200, 
     marginTop:'10%', 
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


const stylesSpr = StyleSheet.create({
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
    marginVertical:15, 
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
image4:    { 
  width: 60, 
  height: 125,  
  marginLeft:'2%' ,
  marginTop:-65,
  marginVertical:-15,
},       
});

const stylesSbr = StyleSheet.create({
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


const stylesUsar = StyleSheet.create({
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
    fontSize: 38,
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
    marginVertical:120, 
    marginLeft:25   
   }, 
  image:    { 
    width: 150, 
    height: 119, 
    marginTop:'-90%', 
    marginLeft:'30%' 
},
  image1:    { 
    marginTop:-30,      
    width: 25, 
    height: 25,       
   marginLeft:'4%',
},
image3:    { 
  width: 25, 
  height: 25, 
  marginTop:'-25%', 
  marginLeft:'5%' 
},        
});


const stylesIni = StyleSheet.create({
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

 
const stylesComU = StyleSheet.create({
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
    fontSize: 38,
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
    marginVertical:120, 
    marginLeft:25   
   }, 
  image:    { 
    width: 150, 
    height: 119, 
    marginTop:'-90%', 
    marginLeft:'30%' 
},
  image1:    { 
    marginTop:-30,      
    width: 25, 
    height: 25,       
   marginLeft:'4%',
},
image3:    { 
  width: 25, 
  height: 25, 
  marginTop:'-25%', 
  marginLeft:'5%' 
},        
});

  
const stylesAvi = StyleSheet.create({
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
  image00:    { 
    width: 150, 
    height: 119, 
    marginTop:-350, 
    marginLeft:'30%' 
},
  image1:    { 
    marginTop:-25,      
    width: 25, 
    height: 25,       
    marginRight: 170
},

button03: {  
  padding: 4,  
  borderRadius:25, 
  width:110, 
  backgroundColor: '#25D366',    
  marginVertical:350, 
  marginLeft:25   
 }, 
 
image33:    { 
  width: 150, 
  height: 119, 
  marginTop:'-150%', 
  marginLeft:'30%' 
},
         
});

 
const stylesDep = StyleSheet.create({
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
    marginTop:'15%',  
    marginLeft :'0%',
    textAlign:'center',
    justifyContent:'center',
    fontFamily:'Arya',
    
  },  
  text1:{
    fontSize: 25,
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
   image03:      { 
  width: 150, 
  height: 119, 
  marginTop:'-110%', 
  marginLeft:'30%'  
 },
  image:    { 
    width: 150, 
    height: 119, 
    marginTop:'35%', 
    marginLeft:'30%' 
},
  image1:    { 
    marginTop:-25,      
    width: 25, 
    height: 25,       
    marginRight: 170
},
 
text03:{
  fontSize: 20,
  color: '#414141', 
  justifyContent:'space-around',
  textAlign:'center',
  fontFamily:'Arya',
  marginLeft:30
   
}, 
button03: {  
  padding: 4,  
  borderRadius:25, 
  width:110, 
  backgroundColor: '#25D366',    
  marginVertical:260, 
  marginLeft:25   
 },  
image03:   
 { 
width: 25, 
height: 25, 
marginTop:'-25%', 
marginLeft:'5%' 
}, 
 
image33:    { 
  width: 150, 
  height: 119, 
  marginTop:'-110%', 
  marginLeft:'30%' 
},
         
});

 

 