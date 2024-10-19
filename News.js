import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=финтех&language=ru&apiKey=b776b84b31a74bc1a78d630e62fd7592`
      );

      if (!response.ok) {
        throw new Error('Не удалось получить новости');
      }

      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#003366" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('./assets/finlogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.header}>Новости дня</Text>
      {news.map((article, index) => (
        <View key={index} style={styles.articleContainer}>
          <Ionicons name="newspaper-outline" size={20} color="#003366" style={styles.icon} />
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.description}>{article.description}</Text>
          <Text style={styles.publishedAt}>{new Date(article.publishedAt).toLocaleString()}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#003366', 
    backgroundColor: '#007BFF', 
    padding: 10,
    borderRadius: 8,
  },
  articleContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  publishedAt: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    marginBottom: 5,
  },
});

export default News;
