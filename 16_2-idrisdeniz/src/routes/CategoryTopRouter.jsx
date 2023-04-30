import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import CategoryScreen from "../screens/Category/CategoryScreen";
import CategoryBrandsScreen from "../screens/Category/CategoryBrands/CategoryBrandsScreen";
import MapScreen from "../screens/Map/MapScreen";

const Tab = createMaterialTopTabNavigator();

const HomeTopRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Teklifler"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarPressColor: "#000",
        tabBarIndicatorStyle: {
          borderBottomColor: "#000",
          borderBottomWidth: 3,
        },
      }}
    >
      <Tab.Screen name="Teklifler" component={CategoryScreen} />
      <Tab.Screen name="Markalar" component={CategoryBrandsScreen} />
    </Tab.Navigator>
  );
};

export default HomeTopRouter;
