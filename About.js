import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

const About = ({ navigation }) => {
  const handleSocialMediaPress = (platform) => {
    const urls = {
      facebook: 'https://www.facebook.com/fingramotakazakhstan?_rdc=1&_rdr',
      instagram: 'https://www.instagram.com/fingramota.kz/',
      telegram: 'https://t.me/fingramotakaz',
      youtube: 'https://www.youtube.com/channel/UCzOYL7yhdc9E9cMj_glnDlw',
    };
    Linking.openURL(urls[platform]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('./assets/finlogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>О нас</Text>
      <Text style={styles.content}>
        Здравствуйте, дорогие друзья! Вы зашли на обучающий медиапортал FinGramota.kz – это один из проектов, реализуемых Агентством РК по регулированию и развитию финансового рынка, по повышению финансовой грамотности населения.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')} style={styles.button}>
          <Text style={styles.buttonText}>Часто задаваемые вопросы</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LearningMaterials')} style={styles.button}>
          <Text style={styles.buttonText}>Информационные материалы</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
          <Text style={styles.buttonText}>Викторина</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.socialMediaTitle}>Социальные сети</Text>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={() => handleSocialMediaPress('facebook')} style={styles.iconContainer}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('instagram')} style={styles.iconContainer}>
          <Icon name="instagram" size={30} color="#C13584" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('telegram')} style={styles.iconContainer}>
          <Icon name="telegram" size={30} color="#0088cc" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialMediaPress('youtube')} style={styles.iconContainer}>
          <Icon name="youtube" size={30} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center', // Центрирование содержимого
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'center', // Центрируем текст
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%', // Ширина контейнера 100% экрана
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, 
    marginVertical: 8,
    width: '48%', // Устанавливаем ширину кнопок
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2, 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  socialMediaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});

export default About;
