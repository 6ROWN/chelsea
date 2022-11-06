import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import COLORS from "../const/Colors";

const PlayerStats = ({ player }) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.imgContainer}>
					<Image
						source={player?.image}
						resizeMode="contain"
						style={styles.img}
					/>
				</View>
				<View>
					<Text style={styles.positionText}>{player.position}</Text>
					<View style={styles.statsContent}>
						<View style={styles.textContainer}>
							<Text style={styles.subText}>Goals</Text>
							<Text style={styles.leadText}>{player?.goals}</Text>
						</View>
						<View style={styles.textContainer}>
							<Text style={styles.subText}>Games</Text>
							<Text style={styles.leadText}>
								{player?.matches}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PlayerStats;

const styles = StyleSheet.create({
	container: {},
	content: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	imgContainer: {
		borderRadius: 50,
		marginHorizontal: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	statsContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	positionText: {
		alignSelf: "center",
		fontWeight: "bold",
		letterSpacing: 3,
		textTransform: "uppercase",
		fontSize: 20,
		paddingBottom: 10,
		color: COLORS.secondary,
	},
	leadText: {
		fontSize: 30,
		fontWeight: "bold",
		marginRight: 17.5,
		color: COLORS.gray,
		fontStyle: "italic",
		textShadowColor: COLORS.darkgray,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 1,
	},
	subText: {
		fontWeight: "800",
		fontSize: 20,
		marginRight: 10,
		color: COLORS.gray,
	},
});
