import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import COLORS from "../const/Colors";

const PlayerDetails = ({ player }) => {
	return (
		<View style={styles.Container}>
			<View style={styles.textContainer}>
				<Text style={styles.leadText}>NAME </Text>
				<Text style={styles.subText}>{player?.name}</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.leadText}>BIRTH </Text>
				<Text style={styles.subText}>{player?.birthday}</Text>
				<Text style={styles.subText}> (age: {player?.age})</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.leadText}>COUNTRY </Text>
				<View style={{ flexDirection: "row" }}>
					<Image
						source={player?.countryFlag}
						style={styles.countryFlag}
					/>
					<Text style={styles.subText}>{player?.nationality}</Text>
				</View>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.leadText}>HEIGHT </Text>
				<Text style={styles.subText}>{player?.height} CM</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.leadText}>WEIGHT </Text>
				<Text style={styles.subText}>{player?.weight} KG</Text>
			</View>
		</View>
	);
};

export default PlayerDetails;

const styles = StyleSheet.create({
	Container: {
		paddingHorizontal: 30,
		padding: 10,
	},
	textContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	leadText: {
		fontWeight: "bold",
		fontSize: 16,
		color: COLORS.darkgray,
		width: 100,
		letterSpacing: 1.2,
		textTransform: "capitalize",
	},
	subText: {
		fontWeight: "500",
		fontSize: 15,
		color: COLORS.gray,
		letterSpacing: 0.5,
		textTransform: "uppercase",
	},
	countryFlag: {
		height: 20,
		width: 20,
		marginRight: 10,
	},
});
