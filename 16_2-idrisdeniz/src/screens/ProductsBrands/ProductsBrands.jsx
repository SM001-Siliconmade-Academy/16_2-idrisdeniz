import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsBrands = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProductsBrands</Text>
    </SafeAreaView>
  );
};

export default ProductsBrands;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
