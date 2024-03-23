import "package:flutter/material.dart";

class HomePage extends StatelessWidget {
  const HomePage(this.changingScreen, {super.key});
  final void Function() changingScreen;

  @override
  Widget build(BuildContext context) {
    return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Image.asset("assets/images/quiz-logo.png", width: 200, height: 200),
                const SizedBox(height: 50),
                const Text(
                  "Quiz App",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 10),
                ElevatedButton(
                  onPressed: changingScreen,
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(5.0),
                      )
                    )
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.play_arrow),
                      SizedBox(width: 10),
                      Text("Start Quiz"),
                    ],
                  ),
                )
              ],
            ),
    );
  }
}