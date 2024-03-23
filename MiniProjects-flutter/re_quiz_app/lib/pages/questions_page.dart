import 'package:flutter/material.dart';
import 'package:re_quiz_app/data/dummy_questions.dart';
import 'package:re_quiz_app/widgets/answer_button.dart';

class QuestionsPage extends StatefulWidget {
  const QuestionsPage({super.key});

  @override
  State<QuestionsPage> createState() => _QuestionsPageState();
}

class _QuestionsPageState extends State<QuestionsPage> {
  @override
  Widget build(BuildContext context) {
    final currentQuestion = dummyQuestions[0];

    return Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 70, vertical: 0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
             Text(
                currentQuestion.questions,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
          
              const SizedBox(height: 10),

              // ListView.separated(
              //   physics: const NeverScrollableScrollPhysics(),
              //   itemBuilder: (context, index) {
              //     return AnswerButton(
              //       answerBtnText: currentQuestion.answers[index], 
              //       onTapAnswerBtn: () {});
              //   }, 
              //   separatorBuilder: (context, index) => const SizedBox(height: 10),
              //   itemCount: currentQuestion.answers.length,
              //   shrinkWrap: true,
              // )
          
              ...currentQuestion.getShuffledAnswers().map((answer) {
                return AnswerButton(
                  answerBtnText: answer,
                  onTapAnswerBtn: () {},
                );
              }).toList(),
          
            ],
          ),
        ),  
    );
  }
}