import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../common/Routes';

const Home = () => {
  const { navigate } = useNavigation();
  return (

    <View Style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
      <Text onPress={() => {navigate(routes.palette); }}>
        Details
      </Text>
    </View>
  );
};

export default Home;
