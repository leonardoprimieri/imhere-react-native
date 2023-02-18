import { StyleSheet } from "react-native";

export const homePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 4,
    color: '#fff',
    padding: 16,
    marginTop: 16,
    fontSize: 16
  },
  button: {
    backgroundColor: '#e83f5b',
    height: 56,
    borderRadius: 4,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});