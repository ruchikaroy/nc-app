import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { fetchAllArticles } from "../api";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllArticles().then(({ data, error, isLoading }) => {
      setArticles(data);
      setIsLoading(isLoading);
      setError(error);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <ArticleCard article={item} />}
      keyExtractor={(item) => item.article_id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
});

export default ArticlesList;
