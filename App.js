import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding";
import DrawerNavigator from "./Navigator/DrawerNavigator";
import DetailPage from "./screens/DetailPage";
import Squads from "./screens/Squads";
import Stadium from "./screens/Stadium";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="Home" component={DrawerNavigator} />
				<Stack.Screen name="Squad" component={Squads} />
				<Stack.Screen name="Details" component={DetailPage} />
				<Stack.Screen name="Stadium" component={Stadium} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
