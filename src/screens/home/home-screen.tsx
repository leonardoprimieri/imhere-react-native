import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { homePageStyles } from './home-screen-styles'

export const HomeScreen = () => {

  const handleAddParticipant = () => {
    console.log('Adicionar participante')
  }

  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.eventName}>Nome do evento</Text>
      <Text style={homePageStyles.eventDate}>Sexta, 18 de fevereiro de 2023</Text>
      <View style={homePageStyles.form}>
        <TextInput
          style={homePageStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={homePageStyles.button} onPress={handleAddParticipant}>
          <Text style={homePageStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}