import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	ScrollView,
} from "react-native";
import React from "react";
import COLORS from "../const/Colors";
import { Ionicons } from "@expo/vector-icons";
import PlayerDetails from "../Components/PlayerDetails";
import PlayerStats from "../Components/PlayerStats";

const DetailPage = ({ navigation, route }) => {
	const player = route.params;
	return (
		<View style={styles.container}>
			<View style={styles.imgContainer}>
				<ImageBackground
					source={player?.image}
					resizeMode="stretch"
					style={styles.playerImage}
				>
					<View style={styles.headerIcons}>
						<Ionicons
							color={COLORS.secondary}
							name="arrow-back"
							size={32}
							onPress={() => navigation.goBack()}
						/>
						<Ionicons
							color={COLORS.complimentary}
							name="md-heart-outline"
							size={32}
							onPress={() => ""}
						/>
					</View>
					<View style={styles.buttomTextContainer}>
						<Text style={styles.buttomText}>{player?.jersey}</Text>
					</View>
				</ImageBackground>
			</View>
			<ScrollView
				style={styles.detailContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.playerDetails}>
					<Text style={styles.headerText}>Player Details</Text>
					<PlayerDetails player={player} />
				</View>
				<View style={styles.playerDetails}>
					<PlayerStats player={player} />
				</View>
			</ScrollView>
		</View>
	);
};

export default DetailPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
	},
	imgContainer: {
		height: 350,
		width: "100%",
	},
	playerImage: {
		width: "100%",
		height: "100%",
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 3,
		color: COLORS.secondary,
		padding: 10,
		textAlign: "center",
		textTransform: "uppercase",
	},
	detailContainer: {
		marginVertical: 10,
	},
	buttomTextContainer: {
		position: "absolute",
		bottom: 10,
		right: 50,
	},
	buttomText: {
		fontSize: 50,
		fontWeight: "bold",
		color: COLORS.neutral,
		textShadowColor: COLORS.darkgray,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	playerDetails: {
		marginTop: 20,
		paddingVertical: 20,
		paddingHorizontal: 10,
		elevation: 4,
		width: "90%",
		backgroundColor: COLORS.offwhite,
		justifyContent: "center",
		alignSelf: "center",
		borderRadius: 20,
		shadowColor: COLORS.gray,
		shadowOffset: { width: -1, height: 1 },
		shadowRadius: 20,
		shadowOpacity: 0.25,
	},
});
