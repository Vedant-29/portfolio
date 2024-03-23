import 'package:flutter/material.dart';

class AnswerButton extends StatelessWidget {
  const AnswerButton({
    super.key,
    required this.answerBtnText, 
    required this.onTapAnswerBtn,
  });

  final String answerBtnText;
  final void Function() onTapAnswerBtn;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
              onPressed: onTapAnswerBtn, 
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                backgroundColor: Colors.white,
                foregroundColor: Colors.black,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(5.0),
                ),
              ),
              child: 
              Text(answerBtnText),
    );
  }
}