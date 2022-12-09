import { View, Text, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import routes from './Routes';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import useAxios from 'axios-hooks'


const Url ='https://jsonplaceholder.typicode.com/users';

const Users = () => {
    const { navigate } = useNavigation();
  
  const [{data:users ,error,loading,setUsers}]=useAxios({
  url:Url
  
  })
    return(
 
<FlatList 
style={{marginTop:50}}

data={users}
renderItem= {({item}) =>(

  <View style={{
    paddingTop:20,
    justifyContent: 'center',
    alignItems: 'center',

    }}>

    <Text style={{fontSize:20 ,}} >{item.name}</Text> 
    <Text>{item.username}</Text>
    <Text onPress={() => navigate(routes.details)}>
            More Details
          </Text>

  </View>
)} />

      );
    };

    export default Users;
