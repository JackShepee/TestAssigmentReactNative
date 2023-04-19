import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const PhotoCard = ({photo, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={{uri: photo.urls.small}} style={styles.image} />
      <Text style={styles.title}>{photo.title}</Text>
      <Text style={styles.author}>{photo.user.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  author: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default PhotoCard;
