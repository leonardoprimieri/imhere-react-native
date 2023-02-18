import { Text, TouchableOpacity, View } from "react-native"
import { participantStyles } from "./participant-styles"

export const Participant = () => {
  return (
    <View style={participantStyles.wrapper}>
      <View style={participantStyles.container}>
        <Text style={participantStyles.name}>Leonardo Merlo Primieri</Text>

      </View>
      <TouchableOpacity style={participantStyles.button}>
        <Text style={participantStyles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}