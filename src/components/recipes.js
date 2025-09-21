import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipes({ categories, foods }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ArticleCard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        testID="recipesDisplay"
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // Display 2 columns
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: hp(2) }}
      />
    </View>
  );
}

const ArticleCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      testID="articleDisplay"
      onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
    >
      <Image source={{ uri: item.recipeImage }} style={styles.articleImage} />
      <Text style={styles.articleText}>{item.recipeName}</Text>
      <Text style={styles.articleDescription}>
        {item.recipeInstructions.length > 60
          ? item.recipeInstructions.slice(0, 60) + "..."
          : item.recipeInstructions}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: wp(1),
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingBottom: hp(1),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  articleImage: {
    width: "100%",
    height: hp(15),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  articleText: {
    fontSize: hp(1.6),
    fontWeight: "600",
    color: "#52525B",
    marginLeft: wp(2),
    marginTop: hp(1),
  },
  articleDescription: {
    fontSize: hp(1.2),
    color: "#6B7280",
    marginLeft: wp(2),
    marginTop: hp(0.5),
    marginRight: wp(2),
  },
});
