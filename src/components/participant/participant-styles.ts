import { StyleSheet } from "react-native";

export const participantStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 8
  },
  container: {
    width: "100%",
    backgroundColor: '#1f1e25',
    height: 56,
    padding: 16,
    borderRadius: 4,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginRight: 12,
  },
  name: {
    color: '#fff',
  },
  button: {
    backgroundColor: 'red',
    height: 56,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
})