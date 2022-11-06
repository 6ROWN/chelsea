import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../const/Colors";

const PlayerCard = ({ player, navigation }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => navigation.navigate("Details", player)}
		>
			<View style={styles.container}>
				<View style={styles.cardImageContainer}>
					<Image
						source={player.image}
						style={styles.image}
						resizeMode="contain"
					/>
				</View>
				<View style={styles.cardDetailsContainer}>
					<View style={styles.cardContent}>
						<Text style={styles.cardText}>{player.name}</Text>
						<Image
							source={player.countryFlag}
							style={styles.cardImage}
						/>
					</View>
					<View style={{}}>
						<View style={styles.container}>
							<Text style={styles.leadText}>AGE</Text>
							<Text style={[styles.subText]}>
								{player.age} yrs
							</Text>
						</View>
						<View style={styles.container}>
							<Text style={styles.leadText}>COUNTRY</Text>
							<Text style={styles.subText}>
								{player.nationality}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default PlayerCard;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	cardImageContainer: {
		height: 150,
		width: 150,
		borderRadius: 20,
	},
	image: {
		borderRadius: 20,
		width: "100%",
		height: "100%",
	},
	cardDetailsContainer: {
		height: 120,
		backgroundColor: COLORS.neutral,
		flex: 1,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		padding: 20,
		justifyContent: "center",
	},
	cardContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cardText: {
		fontSize: 16,
		fontWeight: "bold",
		color: COLORS.secondary,
	},
	cardImage: {
		height: 25,
		width: 25,
		borderRadius: 50,
	},
	leadText: {
		width: 120,
		color: COLORS.darkgray,
		fontWeight: "700",
	},
	subText: {
		textTransform: "uppercase",
		color: COLORS.gray,
		fontWeight: "600",
	},
});
