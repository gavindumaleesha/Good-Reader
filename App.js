import * as React from 'react';
import { SafeAreaView, ScrollView,Text,View,Image, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Login Interface
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
          <Image
            style={{height:100, width: 100, marginTop:10}}
            source={{uri:'https://icon-library.com/images/reading-icon-png/reading-icon-png-26.jpg'}}
          />
          <View style={{marginTop:30, padding:10}}>
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10}}
              placeholder="Username"
            />
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:10}}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={{marginTop:10}}
            onPress={()=>navigation.navigate('Reset Password')}>
            <Text  style={{marginTop:10, fontSize:12, fontWeight:'Bold', color:'red'}}>Forgot Password ?</Text> 
          </TouchableOpacity>
          <View style={{marginTop:30}}>
            <TouchableOpacity
              style={{padding:10, backgroundColor:'#f7b20f',borderRadius:5, marginBottom:20}}
              onPress={()=>navigation.navigate('Book Categories')}>
            <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Login</Text> 
            </TouchableOpacity>
          </View>
          <Text>or</Text>
          <View style={{marginTop:30}}>
            <TouchableOpacity
              style={{padding:10, backgroundColor:'#f7b20f',borderRadius:5, marginBottom:90}}
              onPress={()=>navigation.navigate('New Account')}>
            <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Sign Up</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// New Account Interface
function newAcc({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' , backgroundColor:'white', padding:10,width:'100%'}}>
          <View style={{padding:10}}>
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20, width:'100%'}}
              placeholder="Full Name"
            />
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Username"
            />
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Email"
            />
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Phone Number"
            />
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Password"
            />
            <TextInput 
              style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,width:'100%'}}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <View style={{marginTop:30}}>
            <TouchableOpacity
              style={{padding:10, backgroundColor:'#f7b20f',borderRadius:5, marginBottom:200}}
              onPress={()=>navigation.navigate('LogIn')}>
              <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Submit</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//  Reset Password Interface
function ForgotPw({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'white' }}>

          <View style={{padding:10}}>
              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="Email"
              />

              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="OTP CODE"
              />

              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="New Password"
              />

              <TextInput 
                style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
                placeholder="Re-Enter Password"
                secureTextEntry={true}
              />

            </View>

            <View style={{marginTop:30}}>
              <TouchableOpacity
                style={{padding:10, backgroundColor:'#f7b20f',borderRadius:5, marginBottom:200}}
                onPress={()=>navigation.navigate('LogIn')}>
                <Text  style={{fontSize:12, fontWeight:'Bold', color:'white'}}>Submit</Text> 
              </TouchableOpacity>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// Book Catergeory Interface
function DashBoard({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={{padding:5,flex: 1, alignItems: 'center', backgroundColor:'white'}}>
          
          <TouchableOpacity style={{width:"100%", height:120, backgroundColor:'white', marginTop:2, marginBottom:10,flexDirection: 'row',
          borderWidth:1, borderColor:'#04b553', borderRadius:10}}
          onPress={()=>navigation.navigate('Kids Book Details')}>
            <Image
            style={{height:100, width: 100, marginLeft:10, marginTop:10}}
            source={{uri:'https://www.nicepng.com/png/full/333-3331889_self-knowledge-book-colour-icon-png.png'}}
            />
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'black', paddingTop:40, marginLeft:20}}>KIDS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:"100%", height:120, backgroundColor:'white',marginBottom:10,flexDirection: 'row',
          borderWidth:1, borderColor:'#04b553', borderRadius:10}}
          onPress={()=>navigation.navigate('Gas Details')}>
            <Image
            style={{height:100, width: 100, marginLeft:10, marginTop:10}}
            source={{uri:'https://www.nicepng.com/png/full/333-3331889_self-knowledge-book-colour-icon-png.png'}}
            />
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'black', paddingTop:40, marginLeft:20}}>NOVEL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:"100%", height:120, backgroundColor:'white',marginBottom:10,flexDirection: 'row',
          borderWidth:1, borderColor:'#04b553', borderRadius:10}}
          onPress={()=>navigation.navigate('Gas Details')}>
            <Image
            style={{height:100, width: 100, marginLeft:10, marginTop:10}}
            source={{uri:'https://www.nicepng.com/png/full/333-3331889_self-knowledge-book-colour-icon-png.png'}}
            />
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'black', paddingTop:40, marginLeft:20}}>MYSTERIES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:"100%", height:120, backgroundColor:'white',flexDirection: 'row',
          borderWidth:1, borderColor:'#04b553', borderRadius:10}}
          onPress={()=>navigation.navigate('Gas Details')}>
            <Image
            style={{height:100, width: 100, marginLeft:10, marginTop:10}}
            source={{uri:'https://www.nicepng.com/png/full/333-3331889_self-knowledge-book-colour-icon-png.png'}}
            />
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:20,color:'black', paddingTop:40, marginLeft:20}}>EDUCATION</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

      <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                    borderColor:'gray',alignSelf: 'center',}}>

          <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
            <Image
              style={{height:25, width:25,marginTop:8,marginLeft:20}}
              source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Book List')} >
            <Image
              style={{height:25, width:25,marginTop:8, marginLeft:90}}
              source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
            <Image
              style={{height:25, width:25,marginTop:8,marginLeft:90}}
              source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
            />
          </TouchableOpacity>
      </View>
      

    </SafeAreaView>
  );
}

// Book Search Interface
function BookSearch({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{padding:5,flex: 1, alignItems: 'center', backgroundColor:'white'}}>
            <View style={{flexDirection: 'row', padding:5, marginBottom:500}}>
              <TextInput 
                style={{borderColor:'#f2a407', fontSize:10, borderWidth:1, borderRadius:30, padding:7, marginTop:5,width:200}}
                placeholder="Search Books Here.."
              />
              <TouchableOpacity>
              <Image
                style={{height:25, width:25, marginLeft:10, marginTop:10}}
                source={{uri:'https://www.pinclipart.com/picdir/big/7-79668_search-icon-png-orange-clipart.png'}}
              />
              </TouchableOpacity>
            </View> 
        </View>
      </ScrollView>
        <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                      borderColor:'gray',alignSelf: 'center',}}>

            <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:20}}
                source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Book List')}>
              <Image
                style={{height:25, width:25,marginTop:8, marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


// Bool list Interface
function BookList({navigation}){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{padding:5,flex: 1, backgroundColor:'white'}}>

        <Text style={{fontSize:12, backgroundColor:'#facf78', fontWeight:'bold',width:'100%'}}>Kids Books</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Ali Baba')}>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Ali Baba</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Famous Five</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Alice's Wonder World</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Matilda</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Peater Pan</Text>
            </TouchableOpacity>

          <Text style={{fontSize:12, backgroundColor:'#facf78', fontWeight:'bold',width:'100%'}}>Novels</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Madol Doova')}>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Madol Doova</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Emma</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>The Diary of a Young Girl</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Jane Eyre</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Ulysses</Text>
            </TouchableOpacity>

          <Text style={{fontSize:12, backgroundColor:'#facf78', fontWeight:'bold',width:'100%'}}>Mysterious and Adventurous</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Harry Potter')}>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Harry Potter</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Hatchet</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Odyssey</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Medusa</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>The Lord of the Rings</Text>
            </TouchableOpacity>

          <Text style={{fontSize:12, backgroundColor:'#facf78', fontWeight:'bold',width:'100%'}}>Educational</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Euclid's Elements")}>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Euclid's Elements</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>2001: A Space Odyssey</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Grammar in Use Intermediate</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Clean Code</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{padding:5,fontSize:10,fontWeight:'500'}}>Learning Python</Text>
            </TouchableOpacity>

        </View>
      </ScrollView>

          <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                          borderColor:'gray',alignSelf: 'center',}}>

                <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
                  <Image
                    style={{height:25, width:25,marginTop:8,marginLeft:20}}
                    source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Book List')}>
                  <Image
                    style={{height:25, width:25,marginTop:8, marginLeft:90}}
                    source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
                  <Image
                    style={{height:25, width:25,marginTop:8,marginLeft:90}}
                    source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
                  />
                </TouchableOpacity>
            </View>

    </SafeAreaView>

  )
}


// Book details interface
function AliBabaBook(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{textAlign:'center', padding:5, alignContent:'center',backgroundColor:'white'}}>
          <Text style={{fontSize:20,fontWeight:'800'}}>Ali Baba and the Forty Thieves</Text>
          <Image
            style={{height:200, width: 150, marginTop:10,alignSelf: 'center'}}
            source={{uri:'https://texashistory.unt.edu/ark:/67531/metapth30663/m1/1/med_res/'}}
          />
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Author - Antoine Galland</Text>
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Price - $28 [English Edition]</Text>
          <Text style={{fontSize:12, padding:5, marginBottom:100}}>
            "Ali Baba and the Forty Thieves" is a folk tale from the One 
            Thousand and One Nights. It was added to the collection in the 
            18th century by its French translator Antoine Galland, who heard 
            it from Syrian storyteller Hanna Diyab.
          </Text>
        </View>
      </ScrollView>
          <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                      borderColor:'gray',alignSelf: 'center',}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:20}}
                source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Book List')}>
              <Image
                style={{height:25, width:25,marginTop:8, marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

// Madol Doova Book details Interface
function MadolduwaBook(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{textAlign:'center', padding:5, alignContent:'center',backgroundColor:'white'}}>
          <Text style={{fontSize:20,fontWeight:'800'}}>Madol Doova</Text>
          <Image
            style={{height:200, width: 150, marginTop:10,alignSelf: 'center'}}
            source={{uri:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333331295l/13572653.jpg'}}
          />
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Author - Martin Wickramasinghe</Text>
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Price - $20 [English Edition]</Text>
          <Text style={{fontSize:12, padding:5, marginBottom:110}}>
           Madol Doova is a children's novel and coming-of-age story written by 
           Sri Lankan writer Martin Wickramasinghe and first published in 1947. 
           The book recounts the misadventures of Upali Giniwella and his friends 
           on the Southern coast of Sri Lanka during the 1890s,
          </Text>
        </View>
      </ScrollView>
          <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                      borderColor:'gray',alignSelf: 'center',}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:20}}
                source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Book List')}>
              <Image
                style={{height:25, width:25,marginTop:8, marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


// Harry Potter Book Details Interface
function HarryPotterBook(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{textAlign:'center', padding:5, alignContent:'center',backgroundColor:'white'}}>
          <Text style={{fontSize:20,fontWeight:'800'}}>Harry Potter</Text>
          <Image
            style={{height:200, width: 150, marginTop:10,alignSelf: 'center'}}
            source={{uri:'http://prodimage.images-bn.com/pimages/9780545139700_p0_v5_s1200x630.jpg'}}
          />
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Author - J. K. Rowling</Text>
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Price - $80 [English Edition]</Text>
          <Text style={{fontSize:12, padding:5, marginBottom:110}}>
           Harry Potter is a series of seven fantasy novels written by British author 
           J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, 
          and his friends Hermione Granger and Ron Weasley, all of whom are students at 
          Hogwarts School of Witchcraft and Wizardry.
          </Text>
        </View>
      </ScrollView>
          <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                      borderColor:'gray',alignSelf: 'center',}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:20}}
                source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Book List')}>
              <Image
                style={{height:25, width:25,marginTop:8, marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


// Elements Book Details interface
function ElementsBook(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{textAlign:'center', padding:5, alignContent:'center',backgroundColor:'white'}}>
          <Text style={{fontSize:20,fontWeight:'800'}}>Euclid Elements</Text>
          <Image
            style={{height:200, width: 150, marginTop:10,alignSelf: 'center'}}
            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/81RPwqSLAZL.jpg'}}
          />
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Author - Euclid</Text>
          <Text style={{fontSize:15, padding:5,fontWeight:'600'}}>Price - $180 [English Edition]</Text>
          <Text style={{fontSize:12, padding:5, marginBottom:110}}>
          The Elements is a mathematical treatise consisting of 13 books attributed 
          to the ancient Greek mathematician Euclid in Alexandria, Ptolemaic Egypt c. 
          300 BC. It is a collection of definitions, postulates, propositions, 
          and mathematical proofs of the propositions.
          </Text>
        </View>
      </ScrollView>
          <View style={{width:'100%',backgroundColor:'#ffbc36',height:40,position: 'absolute',marginTop:520,flexDirection: 'row',
                      borderColor:'gray',alignSelf: 'center',}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Book Categories')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:20}}
                source={{uri:'https://www.seekpng.com/png/full/237-2370863_book-hand-drawn-opened-bookmarked-reading-educational-book.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Book List')}>
              <Image
                style={{height:25, width:25,marginTop:8, marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/430-4307214_font-task-list-svg-png-icon-free-download.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Search Books')}>
              <Image
                style={{height:25, width:25,marginTop:8,marginLeft:90}}
                source={{uri:'https://www.seekpng.com/png/full/65-659285_search-icon-transparent-background-material-design-magnifying-glass.png'}}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


// Navigation Routelines

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="LogIn" component={HomeScreen} />
        <Stack.Screen name="Book Categories" component={DashBoard} />
        <Stack.Screen name='Reset Password' component={ForgotPw}/>
        <Stack.Screen name='New Account' component={newAcc}/>
        <Stack.Screen name='Search Books' component={BookSearch}/>
        <Stack.Screen name='Book List' component={BookList}/>
        <Stack.Screen name='Ali Baba' component={AliBabaBook}/>
        <Stack.Screen name='Madol Doova' component={MadolduwaBook}/>
        <Stack.Screen name='Harry Potter' component={HarryPotterBook}/>
        <Stack.Screen name="Euclid's Elements" component={ElementsBook}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
