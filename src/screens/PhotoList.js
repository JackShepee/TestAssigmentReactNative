import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPhotos} from '../store/actions/photos';
import PhotoCard from '../components/PhotoCard';

const PhotoList = ({navigation}) => {
  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <PhotoCard
            photo={item}
            onPress={() => navigation.navigate('Photo', {photo: item})}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhotoList;
