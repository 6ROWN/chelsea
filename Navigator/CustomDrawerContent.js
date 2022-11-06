import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import COLORS from "../const/Colors";

const CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView style={styles.container}>
			<View style={styles.content}>
				<Image
					source={require("../assets/Flags/emblem.png")}
					style={styles.img}
				/>
				<View>
					<Text style={styles.text}>CHELSEA FC</Text>
				</View>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 30,
	},
	content: {
		marginVertical: 50,
		alignItems: "center",
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 20,
	},
	text: {
		color: COLORS.neutral,
		marginTop: 20,
		fontWeight: "bold",
		fontSize: 18,
	},
});
