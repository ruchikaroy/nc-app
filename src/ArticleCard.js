import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const ArticleCard = ({ article }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: article.article_img_url }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title} numberOfLines={1}>
          {article.title}
        </Text>
        <Text style={styles.subTitle}>
          By {article.author} on{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </Text>
        <View style={styles.flexContainer}>
          <View style={styles.flexItem}>
            <MaterialCommunityIcons name="comment" size={20} color="black" />
            <Text style={styles.iconText}>{article.comment_count}</Text>
          </View>
          <View style={styles.flexItem}>
            <FontAwesome name="thumbs-up" size={20} color="black" />
            <Text style={styles.iconText}>{article.votes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 5,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: "grey",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: "gray",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  flexItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default ArticleCard;
