import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../const/Colors";
import StadiumData from "../const/StadiumData";

const Stadium = ({ navigation }) => {
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<View>
				<ImageBackground
					source={StadiumData?.image}
					resizeMode="cover"
					style={styles.backgroundImg}
				>
					<View style={styles.headerIcons}>
						<Ionicons
							color={COLORS.secondary}
							name="arrow-back"
							size={32}
							onPress={() => navigation.goBack()}
						/>
						<Ionicons
							color={COLORS.secondary}
							name="ellipsis-vertical"
							size={32}
							onPress={() => ""}
						/>
					</View>
					<View style={styles.backgroundContent}>
						<View style={styles.textContainer}>
							<View>
								<Text style={[styles.leadText, styles.text]}>
									{StadiumData.name}
								</Text>
								<Text style={[styles.subText, styles.text]}>
									{StadiumData.team}
								</Text>
								<Text style={[styles.mutedText, styles.text]}>
									{StadiumData.location}
								</Text>
							</View>
							<View>
								<Image
									style={styles.emblem}
									source={StadiumData.emblem}
									resizeMode="contain"
								/>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.itemContainer}>
				<View style={styles.itemContent}>
					<View>
						<Text style={styles.leadItemText}>Location</Text>
					</View>
					<View>
						<Text style={styles.subItemText}>
							{StadiumData.street}, {StadiumData.location}
						</Text>
					</View>
				</View>
				<View style={[styles.itemContent, styles.oddItem]}>
					<View>
						<Text style={styles.leadItemText}>Capacity</Text>
					</View>
					<View>
						<Text style={styles.subItemText}>
							{StadiumData.capacity}
						</Text>
					</View>
				</View>
				<View style={styles.itemContent}>
					<View>
						<Text style={styles.leadItemText}>Built</Text>
					</View>
					<View>
						<Text style={styles.subItemText}>
							{StadiumData.year}
						</Text>
					</View>
				</View>
				<View style={[styles.itemContent, styles.oddItem]}>
					<View>
						<Text style={styles.leadItemText}>Architect</Text>
					</View>
					<View>
						<Text style={styles.subItemText}>
							{StadiumData.architect}
						</Text>
					</View>
				</View>
				<View style={[styles.itemContent]}>
					<View>
						<Text style={styles.leadItemText}>Pitch Area</Text>
					</View>
					<View>
						<Text style={styles.subItemText}>
							{StadiumData.area}
						</Text>
					</View>
				</View>
				<View style={[styles.itemContent, styles.oddItem]}>
					<View>
						<Text style={styles.leadItemText}>Description</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Text style={styles.subItemText}>
							{StadiumData.description}
						</Text>
					</View>
				</View>
				<View style={styles.btnContainer}>
					<TouchableOpacity>
						<Text style={styles.btnText}>TOUR</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default Stadium;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	backgroundImg: {
		width: "100%",
		height: 320,
		overflow: "hidden",
		opacity: 0.8,
	},
	headerIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
	},
	backgroundContent: {
		padding: 20,
		flex: 1,
		justifyContent: "flex-end",
	},
	textContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	leadText: {
		fontSize: 28,
	},
	subText: {
		fontSize: 20,
	},
	mutedText: {
		fontSize: 18,
		paddingVertical: 5,
	},
	text: {
		textShadowColor: COLORS.darkgray,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 10,
		fontWeight: "bold",
		color: COLORS.neutral,
	},
	emblem: {
		height: 100,
		width: 100,
	},
	itemContainer: {
		paddingVertical: 20,
		height: "100%",
	},
	itemContent: {
		flexDirection: "row",
		justifyContent: "flex-start",
		paddingVertical: 10,
		paddingHorizontal: 25,
	},
	leadItemText: {
		fontWeight: "bold",
		color: COLORS.darkgray,
		fontSize: 16,
		width: 100,
	},
	subItemText: {
		color: COLORS.gray,
		fontSize: 16,
		lineHeight: 30,
		textAlign: "justify",
	},

	oddItem: {
		backgroundColor: COLORS.offwhite,
	},

	btnContainer: {
		marginTop: 30,
		marginBottom: 10,
		alignItems: "center",
		alignSelf: "center",
		width: "90%",
		backgroundColor: COLORS.secondary,
		padding: 20,
		borderRadius: 20,
	},
	btnText: {
		fontWeight: "bold",
		letterSpacing: 3,
		fontSize: 20,
		color: COLORS.neutral,
	},
});
