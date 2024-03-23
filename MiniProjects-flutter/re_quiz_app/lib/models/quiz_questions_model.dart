
class QuizQuestionsModel {
  const QuizQuestionsModel(this.questions, this.answers);

  final String questions;
  final List<String> answers;

  List<String> getShuffledAnswers() {
    final ShuffledAnswers = List.of(answers);
    ShuffledAnswers.shuffle();
    return ShuffledAnswers;
  }
}