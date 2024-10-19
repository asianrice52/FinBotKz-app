import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SocialMedia = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Социальные сети</Text>
      <Text style={styles.content}>
        Fingramota.kz также представлена в социальных сетях: Facebook, Instagram, Telegram, YouTube, Aitube, TikTok.
      </Text>
      <Text style={styles.content}>
        Подписывайтесь на наши аккаунты и повышайте свою финансовую грамотность вместе с нами!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
});

export default SocialMedia;
