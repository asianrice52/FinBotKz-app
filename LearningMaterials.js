import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image } from 'react-native';

const LearningMaterials = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Логотип в верхней части */}
      <Image 
        source={require('./assets/finlogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Уважаемые читатели!</Text>
      <Text style={styles.content}>
        Предлагаем вашему вниманию базу методических ресурсов по финансовой грамотности. Здесь вы сможете найти интересные и полезные материалы по финансовой грамотности от финансовых регуляторов и организаций разных стран, а также различные пособия, методические материалы.
      </Text>
      <Text style={styles.content}>
        Данная база собрана при партнерстве с проектом INFE OECD (Организации экономического сотрудничества и развития) в рамках взаимодействия стран СНГ, а также с AFI (Альянса за финансовую доступность) в регионах Центральной Азии и Восточной Европы, в целях повышения финансовой грамотности населения.
      </Text>
      <Text style={styles.content}>
        Данная база обновляется на регулярной основе.
      </Text>

      <View style={styles.cardContainer}>
        <CountryCard
          country="Россия"
          links={[
            { title: 'Федеральный сетевой методический центр «Финансовая грамотность в ВУЗах»', url: 'https://finuch.ru/' },
            { title: 'Проект Министерства финансов Российской федерации «Дружи с финансами»', url: 'https://vashifinancy.ru/' },
            { title: 'Портал по повышению финансовой грамотности Центрального банка РФ', url: 'https://fincult.info/' },
            { title: 'Методические и обучающие материалы', url: 'https://fincult.info/prepodavanie/base/obuchayushchie-materialy/' },
          ]}
        />
        <CountryCard
          country="Беларусь"
          links={[
            { title: 'Единый интернет-портал финансовой грамотности населения, проект Национального Банка Республики Беларусь', url: 'http://fingramota.by/' },
            { title: 'Раздел с методическими пособиями', url: 'http://fingramota.by/ru/documents' },
            { title: 'Пособие для молодых семей', url: 'http://fingramota.by/files/2020/6/24/637286144589852344.pdf' },
            { title: 'Онлайн-игра в формате чат-бота, разработанная совместно с VISA', url: 'https://finance.tut.by/visa.html#ua:finance.tut.by_main_left_service-menu_visa' },
          ]}
        />
        <CountryCard
          country="Узбекистан"
          links={[
            { title: 'Проект Национального Банка Узбекистана по финансовой грамотности', url: 'https://finlit.uz/' },
          ]}
        />
      </View>

      <Text style={styles.source}>(*Авторские права) Источник: https://fingramota.kz/ru/methodological-resources</Text>
    </ScrollView>
  );
};

const CountryCard = ({ country, links }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{country}</Text>
    {links.map((link, index) => (
      <Text key={index} style={styles.link} onPress={() => Linking.openURL(link.url)}>
        {link.title}
      </Text>
    ))}
  </View>
);

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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007BFF',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify',
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007BFF',
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginBottom: 5,
    paddingVertical: 5,
  },
  source: {
    fontSize: 14,
    color: '#777',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LearningMaterials;
