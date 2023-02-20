import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components";

import { homePageStyles } from './home-screen-styles'

export const HomeScreen = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipant, setNewParticipant] = useState('')

  const handleAddParticipant = () => {
    setParticipants(prevState => [...prevState, newParticipant])
    setNewParticipant('')
  }

  const handleRemoveParticipant = (participant: string) => {
    Alert.alert('Remover', `Deseja remover ${participant} da lista?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState =>
          prevState.filter(item => item !== participant))
      },
    ])
  }

  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.eventName}>Nome do evento</Text>
      <Text style={homePageStyles.eventDate}>Sexta, {new Date().getDate()} de fevereiro de 2023</Text>
      <View style={homePageStyles.form}>
        <TextInput
          value={newParticipant}
          onChangeText={setNewParticipant}
          style={homePageStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={homePageStyles.button} onPress={handleAddParticipant}>
          <Text style={homePageStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={homePageStyles.participantsList}
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