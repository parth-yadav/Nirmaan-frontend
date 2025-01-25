export interface QuizOptionProps {
  text: string;
  isCorrect?: boolean;
}

export interface QuizQuestionProps {
  title: string;
  description: string;
  options: QuizOptionProps[];
}
