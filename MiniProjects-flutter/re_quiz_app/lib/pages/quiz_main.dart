import "package:flutter/material.dart";
import 'package:re_quiz_app/pages/home_page.dart';
import 'package:re_quiz_app/pages/questions_page.dart';


class QuizMain extends StatefulWidget {
  const QuizMain({super.key});

  @override
  State<QuizMain> createState() => _QuizMainState();
}

class _QuizMainState extends State<QuizMain> {
    var activeScreen = 'Home-Page';

  void changeScreen() {
    setState(() {
      activeScreen = 'Questions-Page';
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget finalScreen = HomePage(changeScreen);
    
    if (activeScreen == 'Questions-Page') {
      finalScreen = const QuestionsPage();
    }

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Colors.blue, Colors.blueAccent],
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
            )
          ),
          child:  finalScreen,
        ),
      )
    );
  }
}