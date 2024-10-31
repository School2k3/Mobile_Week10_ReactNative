import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from '../styles';

function HomeScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Image source={require('../icons/task.png')} style={styles.image} />
      </View>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../icons/mailIcon.png')} />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contents', { username: name })}>
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;