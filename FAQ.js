import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FAQ = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('./assets/finlogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Часто задаваемые вопросы (FAQ)</Text>
      <Text style={styles.question}>
        <Text style={styles.bold}>1. Как я могу повысить свою финансовую грамотность?</Text>
        {'\n'}- Используйте наши обучающие материалы и курсы, доступные на сайте.
      </Text>
      <Text style={styles.question}>
        <Text style={styles.bold}>2. Как защитить свои права потребителей финансовых услуг?</Text>
        {'\n'}- Читайте наши статьи и советы по защите прав.
      </Text>
      {/* Добавьте больше вопросов и ответов по мере необходимости */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
    textAlign: 'center', 
  },
  question: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#333', 
    backgroundColor: '#f0f8ff', 
    padding: 10,
    borderRadius: 8, 
  },
  bold: {
    fontWeight: 'bold',
    color: '#007BFF', 
  },
});

export default FAQ;
