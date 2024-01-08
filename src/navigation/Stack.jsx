import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NaverLoginScreen from "../screen/auth/NaverLoginScreen";
import Tabs from "./Tab";

const Stack = createNativeStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator
      initialRouteName={"Main"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {false ? (
        <></>
      ) : (
        <>
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen
            name="naverLogin"
            options={{ headerTitle: "네이버 로그인" }}
            component={NaverLoginScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Stacks;
