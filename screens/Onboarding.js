import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../const/Colors";
import { StatusBar } from "expo-status-bar";

// const { width, height } = Dimensions.get(window);

const Onboarding = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<View style={styles.imgContainer}>
				<Image
					source={require("../assets/Flags/emblem.png")}
					resizeMode="contain"
					style={styles.img}
				/>
				<View style={StyleSheet.btnContainer}>
					<TouchableOpacity
						onPress={() => navigation.replace("Home")}
					>
						<View style={styles.btn}>
							<Text style={styles.btnText}>START</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.neutral,
	},
	imgContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	img: {
		width: "100%",
		height: "50%",
	},
	btnContainer: {
		flex: 1,
	},

	btn: {
		padding: 17.5,
		backgroundColor: COLORS.secondary,
		borderRadius: 25,
		width: 250,
		marginTop: 75,
		borderWidth: 2,
		borderColor: "#dba111",
	},
	btnText: {
		color: COLORS.neutral,
		fontWeight: "bold",
		fontSize: 22,
		textAlign: "center",
		letterSpacing: 5,
	},
});
