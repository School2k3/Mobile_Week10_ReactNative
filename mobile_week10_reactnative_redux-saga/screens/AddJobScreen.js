import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addContentRequest } from '../actions/contentActions';
import { styles } from '../styles';

function AddJobScreen({ navigation, route }) {
  const { name } = route.params;
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleAddContent = () => {
    if (content.trim()) {
      dispatch(addContentRequest(content));
      navigation.navigate('Contents', { username: name });
    }
  };

  return (
    <View style={styles.homeContainer}>
      <View style={[styles.userContainer, { alignSelf: 'flex-start', marginLeft: 32 }]}>
        <Image style={styles.userImage} source={require('../icons/user.png')} />
        <View>
          <Text style={styles.name}>Hi {name}</Text>
          <Text>Have agrate day a head</Text>
        </View>
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
}

export default AddJobScreen;