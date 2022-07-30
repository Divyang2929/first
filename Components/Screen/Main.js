import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Ionicons from 'react-native-vector-icons/Ionicons';

//screen
import Homescreen from '../Screen/Homescreen';
import Profilescreen from '../Screen/Profilescreen';
import Explorescreen from '../Screen/Explorescreen';

//screen Names

const homename='Home';
const profilename='Profile';
const explorename='Explore';

const Tab =createBottomTabNavigator();


export default function Main(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homename}
            screenOptions={({ route }) => ({
            
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let rn=route.name;
                    

                if (rn==homename){
                    iconName=focused ?'home' : 'home-outline' ;

                }
                else if ( rn==explorename){
                    iconName=focused ? 'list': 'list-outline';
                }
                else if(rn==profilename){
                    iconName=focused ? 'settings': 'settings-outline';
                }
                    return<Ionicons name={iconName} size={size} color={color} />
            }

            })}>
            
            <Tab.Screen name={homename} component={Homescreen}/>
            <Tab.Screen name={profilename} component={Profilescreen}/>
            <Tab.Screen name={explorename} component={Explorescreen}/>

            
            
            
            </Tab.Navigator>
        </NavigationContainer>
    );
}

    
   