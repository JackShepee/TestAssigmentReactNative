import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Photo = ({navigation}) => {
  const photo = navigation.getParam('photo');

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.urls.full}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Photo;
