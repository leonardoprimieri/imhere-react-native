import { useState } from "react";
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components";

import { homePageStyles } from './home-screen-styles'

export const HomeScreen = () => {
  const [participants, setParticipants] = useState(['Leonardo', 'João', 'Maria'])

  const handleAddParticipant = () => {
    setParticipants(oldParticipants =>
      [...oldParticipants, Math.random().toString(36).substring(7)])
  }

  const handleRemoveParticipant = (participant: string) => {
    setParticipants(oldParticipants =>
      oldParticipants.filter(item => item !== participant))
  }

  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.eventName}>Nome do evento</Text>
      <Text style={homePageStyles.eventDate}>Sexta, {new Date().getDate()} de fevereiro de 2023</Text>
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
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={() => handleRemoveParticipant(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={homePageStyles.emptyList}>Nenhum participante adicionado</Text>
        )}
      />
    </View>
  );
}