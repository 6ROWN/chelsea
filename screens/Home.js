import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../const/Colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imgContainer}>
				<ImageBackground
					source={require("../assets/Players/home-bg.jpg")}
					resizeMode="cover"
					style={styles.backgroundImage}
				>
					<View>
						<Ionicons
							onPress={() => navigation.toggleDrawer()}
							name="menu"
							size={45}
							style={styles.icon}
						/>
					</View>
				</ImageBackground>
				<View style={styles.statContainer}>
					<Text style={styles.leadText}>
						Welcome to The 5th Stand
					</Text>
					<Text style={styles.subText}>
						The Official Chelsea FC App
					</Text>
				</View>
				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Squad")}
					>
						<Text style={styles.btnText}>SQUAD</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.neutral,
	},

	imgContainer: {
		flex: 1,
	},
	backgroundImage: {
		width: "100%",
		height: 450,
		overflow: "hidden",
		opacity: 0.8,
	},
	icon: {
		marginLeft: 10,
		marginTop: 20,
		color: COLORS.primary,
		textShadowColor: COLORS.neutral,
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 20,
	},
	statContainer: {
		height: 120,
		backgroundColor: COLORS.secondary,
		bottom: 60,
		width: "80%",
		elevation: 4,
		borderRadius: 18,
		alignSelf: "center",
		justifyContent: "center",
		borderWidth: 3,
		borderColor: COLORS.complimentary,
		alignItems: "center",
	},
	leadText: {
		color: COLORS.neutral,
		fontWeight: "bold",
		paddingBottom: 20,
		fontSize: 20,
	},
	subText: { color: COLORS.neutral, fontSize: 17 },
	btnContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		padding: 17.5,
		backgroundColor: COLORS.royal,
		borderRadius: 18,
		width: "80%",
		borderWidth: 2,
		borderColor: COLORS.secondary,
	},
	btnText: {
		color: COLORS.secondary,
		fontWeight: "bold",
		fontSize: 22,
		textAlign: "center",
		letterSpacing: 5,
	},
});
