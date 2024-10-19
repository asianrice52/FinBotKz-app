import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  {
    question: "Что такое депозит?",
    options: ["Вид налога", "Банковский вклад", "Пенсионный фонд", "Финансовая пирамида"],
    correctAnswer: "Банковский вклад",
  },
  {
    question: "Какой процент от дохода рекомендуется откладывать?",
    options: ["5%", "10%", "20%", "50%"],
    correctAnswer: "10%",
  },
  {
    question: "Что такое инфляция?",
    options: ["Рост цен на товары и услуги", "Снижение уровня жизни", "Падение курса валюты", "Увеличение доходов населения"],
    correctAnswer: "Рост цен на товары и услуги",
  },
  {
    question: "Что такое диверсификация?",
    options: ["Распределение активов между разными видами инвестиций", "Увеличение доходов за счет одного актива", "Продажа активов с убытком", "Сохранение всех активов в одной валюте"],
    correctAnswer: "Распределение активов между разными видами инвестиций",
  },
  {
    question: "Что означает кредитный рейтинг?",
    options: ["Количество денег, которые вам могут одолжить", "Оценка способности погашать долг", "Процент, который банк начисляет на депозит", "Максимальная сумма кредита"],
    correctAnswer: "Оценка способности погашать долг",
  },
  {
    question: "Какой срок хранения денег на депозите называется краткосрочным?",
    options: ["Менее 1 года", "1-3 года", "Более 5 лет", "10 лет"],
    correctAnswer: "Менее 1 года",
  },
  {
    question: "Что такое активы?",
    options: ["То, что приносит доход или увеличивает стоимость", "Счета, которые нужно оплатить", "Денежные средства на счете", "Деньги, потраченные на покупку"],
    correctAnswer: "То, что приносит доход или увеличивает стоимость",
  },


  // добавь больше вопросов по финансовой грамотности
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <Text style={styles.scoreText}>Ваш результат: {score} из {questions.length}</Text>
      ) : (
        <>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
          </View>

          <View style={styles.optionsContainer}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.optionButton} 
                onPress={() => handleAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Quiz;
