import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContents, deleteContent, updateContent } from '../contentSlice';
import { styles } from '../styles';

const ListOfContents = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.contents.items);
  const { username } = route.params;

  useEffect(() => {
    dispatch(fetchContents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContent(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateContent({ id, content: 'Learn Java' }));
  };

  const Item = ({ content }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handleDelete(content.id)}>
        <Image source={require('../icons/Frame.png')} />
      </TouchableOpacity>
      <Text style={styles.content}>{content.content}</Text>
      <TouchableOpacity onPress={() => handleUpdate(content.id)}>
        <Image style={styles.editIcon} source={require('../icons/Edit.png')} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.userImage} source={require('../icons/user.png')} />
        <View>
          <Text style={styles.name}>Hi {username}</Text>
          <Text>Have agrate day a head</Text>
        </View>
      </View>
      <SafeAreaView style={{ flex: 2 }}>
        <FlatList data={contents} renderItem={({ item }) => <Item content={item} />} keyExtractor={(item) => item.id} />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Jobs', { name: username })}>
        <Image source={require('../icons/addButton.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default ListOfContents;
