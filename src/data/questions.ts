import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: 'TypeScript เป็นซุปเปอร์เซ็ตของภาษาใด?',
    options: ['Java', 'C++', 'JavaScript', 'Python'],
    correctAnswer: 2,
  },
  {
    id: 2,
    text: 'ใครเป็นผู้สร้าง React?',
    options: ['Google', 'Facebook', 'Amazon', 'Microsoft'],
    correctAnswer: 1,
  },
  {
    id: 3,
    text: 'React เป็นอะไรบ้าง?',
    options: ['Framework', 'Library', 'Tools', 'Database'],
    correctAnswer: 1,
  },
  {
    id: 4,
    text: 'CSS ย่อมาจากอะไร?',
    options: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    text: 'HTML ย่อมาจากอะไร?',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    text: 'JavaScript ย่อมาจากอะไร?',
    options: ['Jews Script', 'Jamaica Script', 'Jordan Script', 'Java Script'],
    correctAnswer: 3,
  },
  {
    id: 7,
    text: 'PHP ย่อมาจากอะไร?',
    options: [
      'Hypertext Preprocessor',
      'Hypertext Programming',
      'Hypertext Preprogramming',
      'Hometext Preprocessor',
    ],
    correctAnswer: 2,
  },
];
