import * as React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import COLORS from "../const/Colors";
import CustomDrawerContent from "./CustomDrawerContent";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Squads from "../screens/Squads";
import Stadium from "../screens/Stadium";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				drawerType: "slide",
				drawerStyle: { width: 250, backgroundColor: COLORS.secondary },
				overlayColor: null,
				// sceneContainerStyle: {
				// 	backgroundColor: COLORS.secondary,
				// },
				drawerItemStyle: {
					backgroundColor: null,
				},
				drawerActiveTintColor: COLORS.neutral,
				drawerInactiveTintColor: COLORS.offwhite,
				drawerLabelStyle: {
					fontWeight: "bold",
				},
			}}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen
				name="home"
				component={Home}
				options={{
					title: "HOME",
					drawerIcon: () => (
						<FontAwesome
							name="home"
							size={24}
							color={COLORS.neutral}
							style={{ marginRight: 15 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Squad"
				component={Squads}
				options={{
					title: "SQUADS",
					drawerIcon: () => (
						<FontAwesome
							name="users"
							size={24}
							color={COLORS.neutral}
							style={{ marginRight: 15 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="News"
				component={Home}
				options={{
					title: "NEWS",
					drawerIcon: () => (
						<MaterialCommunityIcons
							name="newspaper-variant-multiple"
							size={24}
							color={COLORS.neutral}
							style={{ marginRight: 15 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Stadium"
				component={Stadium}
				options={{
					title: "STADIUM",
					drawerIcon: () => (
						<MaterialCommunityIcons
							name="stadium"
							size={24}
							color={COLORS.neutral}
							style={{ marginRight: 15 }}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
