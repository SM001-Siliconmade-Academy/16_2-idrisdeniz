import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import MyWallet from "../screens/Wallet/MyWallet";
import Balance from "../screens/Wallet/Balance";
import Cards from "../screens/Wallet/Cards";

const Tab = createMaterialTopTabNavigator();

const HomeTopRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Paracık Bakiye"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarIndicatorStyle: {
          borderBottomColor: "#000",
          borderBottomWidth: 3,
        },
      }}
    >
      <Tab.Screen name="Paracık Bakiye" component={MyWallet} />
      <Tab.Screen name="TL Bakiye" component={Balance} />
      <Tab.Screen name="Kartlarım" component={Cards} />
    </Tab.Navigator>
  );
};

export default HomeTopRouter;
