import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image } from 'react-native';

const templateQA = [
  { question: 'Что такое депозит?', answer: 'Депозит — это банковский вклад.' },
  { question: 'Что такое кредит?', answer: 'Кредит — это заем денег под проценты.' },
  { question: 'Какой процент нужно откладывать?', answer: 'Рекомендуется откладывать 10% от дохода.' },
  { question: 'Что такое инфляция?', answer: 'Инфляция — это повышение общего уровня цен на товары и услуги.' },
  { question: 'Что такое инвестиции?', answer: 'Инвестиции — это вложение денег с целью получения прибыли.' },
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, type: 'user' };
      const botResponse = templateQA.find((qa) => qa.question === input)?.answer || 'Извините, я пока не знаю ответа на этот вопрос.';

      setMessages([...messages, userMessage, { text: botResponse, type: 'bot' }]);
      setInput('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/finlogo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Введите свой вопрос</Text>

      <View style={styles.chatBox}>
        {messages.map((msg, index) => (
          <View key={index} style={[styles.message, msg.type === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </View>

      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Введите сообщение..."
      />
      <Button title="Отправить" onPress={handleSend} />
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
  chatBox: {
    flex: 1,
    marginBottom: 20,
  },
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6E6E6',
  },
  input: {
    height: 40,
    borderColor: '#007BFF',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Chat;
