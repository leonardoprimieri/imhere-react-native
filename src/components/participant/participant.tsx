import { Text, TouchableOpacity, View } from "react-native"
import { participantStyles } from "./participant-styles"

type Props = {
  name: string
  onRemove: () => void
}

export const Participant = ({ name, onRemove }: Props) => {
  return (
    <View style={participantStyles.wrapper}>
      <View style={participantStyles.container}>
        <Text style={participantStyles.name}>{name}</Text>

      </View>
      <TouchableOpacity onPress={onRemove} style={participantStyles.button}>
        <Text style={participantStyles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}