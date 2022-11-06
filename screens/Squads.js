import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
	TextInput,
	SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import { Ionicons } from "@expo/vector-icons";
import playerCategory from "../const/playerCategory";
import playerProfile from "../const/Profile";
import PlayerCard from "../Components/PlayerCard";

const Squads = ({ navigation }) => {
	const [selectedCategoryId, setSelectedCategoryId] = useState(1);
	const [filteredPlayers, setFilteredPlayers] = useState([]);

	const filterPlayers = (id) => {
		setFilteredPlayers(
			playerProfile.filter((item) => {
				return item.id == id;
			})
		);
	};

	useEffect(() => {
		filterPlayers(4);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Ionicons
					color={COLORS.secondary}
					name="menu"
					size={32}
					onPress={() => navigation.toggleDrawer()}
				/>
				<Image
					source={require("../assets/Flags/emblem.png")}
					style={styles.headerImage}
				/>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.mainContainer}>
					<View style={styles.searchInputContainer}>
						<Ionicons
							name="search"
							size={24}
							color={COLORS.tetiary}
						/>
						<TextInput
							placeholder="Search item here"
							style={{ flex: 1 }}
						/>
						<Ionicons
							name="ios-filter"
							size={24}
							color={COLORS.tetiary}
						/>
					</View>
					<View style={styles.categoryContainer}>
						{playerCategory.map((x) => (
							<View key={x.id} style={{ alignItems: "center" }}>
								<TouchableOpacity
									onPress={() => {
										setSelectedCategoryId(x.id);
										filterPlayers(x.id);
									}}
									style={[
										styles.categoryBtn,
										{
											backgroundColor:
												selectedCategoryId == x.id
													? COLORS.secondary
													: COLORS.neutral,
										},
									]}
								>
									<Ionicons
										name={x.icon}
										size={30}
										color={
											selectedCategoryId == x.id
												? COLORS.neutral
												: COLORS.secondary
										}
									/>
								</TouchableOpacity>
								<Text style={styles.categoryBtnName}>
									{x.name}
								</Text>
							</View>
						))}
					</View>
					<View style={{ marginTop: 20 }}>
						<FlatList
							keyExtractor={(item) => item.id}
							data={filteredPlayers}
							renderItem={({ item }) => (
								<View>
									{item.player.map((x) => (
										<PlayerCard
											key={x.id}
											player={x}
											navigation={navigation}
										/>
									))}
								</View>
							)}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Squads;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.neutral,
		flex: 1,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
	headerIcon: {},
	headerImage: {
		height: 32,
		width: 32,
		borderRadius: 50,
	},
	mainContainer: {
		flex: 1,
		backgroundColor: COLORS.offwhite,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		elevation: 4,
		paddingHorizontal: 20,
		paddingVertical: 20,
		height: "100%",
		shadowColor: COLORS.gray,
		shadowOffset: { width: -1, height: 1 },
		shadowRadius: 20,
		shadowOpacity: 0.25,
	},
	searchInputContainer: {
		height: 50,
		backgroundColor: COLORS.neutral,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
		paddingHorizontal: 20,
		elevation: 2,
		marginTop: 15,
		shadowColor: COLORS.gray,
		shadowOffset: { width: -1, height: 1 },
		shadowRadius: 20,
		shadowOpacity: 0.25,
	},
	categoryContainer: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	categoryBtn: {
		height: 50,
		width: 50,
		backgroundColor: COLORS.secondary,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	categoryBtnName: {
		fontSize: 14,
		marginTop: 5,
		fontWeight: "bold",
		textAlign: "center",
		color: "#666",
	},
});
