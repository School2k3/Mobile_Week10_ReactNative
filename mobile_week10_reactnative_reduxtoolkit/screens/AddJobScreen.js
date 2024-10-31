import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addContent } from '../contentSlice';
import { styles } from '../styles';

const AddJobScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleAddContent = () => {
    dispatch(addContent(content));
    navigation.navigate('Contents', { username: name });
  };

  return (
    <View style={styles.homeContainer}>
      <View style={[styles.userContainer, { alignSelf: 'flex-start', marginLeft: 32 }]}>
        <Image style={styles.userImage} source={require('../icons/user.png')} />
        <Text style={styles.name}>Hi {name}</Text>
      </View>
      <Text style={[styles.title, { color: 'black', fontSize: 30 }]}>ADD YOUR JOB</Text>
      <View style={[styles.inputContainer, { borderRadius: 4 }]}>
        <Image source={require('../icons/job.png')} />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Input your job"
          value={content}
          onChangeText={setContent}
        />
      </View>
      <TouchableOpacity style={[styles.button, { paddingHorizontal: 50 }]} onPress={handleAddContent}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={require('../icons/task.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default AddJobScreen;