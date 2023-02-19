import { StatusBar } from "react-native";
import { HomeScreen } from "./src/screens";

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent" />
      <HomeScreen />
    </>
  );
}

export default App
