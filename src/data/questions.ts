import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: 'CSS Box Model ประกอบด้วยส่วนประกอบใดบ้าง?',
    options: [
      'Content, Padding, Border, Margin',
      'Font, Color, Background, Layout',
      'Flexbox, Grid, Position',
      'Animation, Transition, Transform',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    text: 'ใน React การสร้าง Component ใหม่ใช้คำสั่งใด?',
    options: [
      'createElement',
      'createComponent',
      'renderComponent',
      'defineComponent',
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    text: 'Props ใน React มีหน้าที่อะไร?',
    options: [
      'ส่งข้อมูลจาก Parent Component ไปยัง Child Component',
      'เก็บสถานะของ Component',
      'จัดการเหตุการณ์ (Event) ใน Component',
      'กำหนดรูปแบบของ Component',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    text: 'State ใน React มีหน้าที่อะไร?',
    options: [
      'ส่งข้อมูลจาก Parent Component ไปยัง Child Component',
      'เก็บสถานะของ Component',
      'จัดการเหตุการณ์ (Event) ใน Component',
      'กำหนดรูปแบบของ Component',
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    text: 'Tailwind CSS เป็นอะไร?',
    options: [
      'Framework สำหรับสร้าง Animation',
      'Preprocessor สำหรับ CSS',
      'Utility-first CSS Framework',
      'JavaScript Library สำหรับสร้าง UI',
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    text: 'ข้อใดคือคลาสใน Tailwind CSS ที่ใช้สำหรับจัดการ Layout?',
    options: ['flex', 'text', 'bg', 'container'],
    correctAnswer: 3,
  },
  {
    id: 7,
    text: 'ใน React การจัดการ Event ทำได้อย่างไร?',
    options: [
      'ใช้คำสั่ง onEvent',
      'ใช้คำสั่ง handleEvent',
      'ใช้ attribute on[Event] เช่น onClick',
      'ใช้ Hook useEffect',
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    text: 'ข้อใดคือ Hook ใน React ที่ใช้สำหรับจัดการ State?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 0,
  },
  {
    id: 9,
    text: 'CSS Selectors มีกี่ประเภท?',
    options: ['2 ประเภท', '3 ประเภท', '4 ประเภท', '5 ประเภท'],
    correctAnswer: 1,
  },
  {
    id: 10,
    text: 'ข้อดีของ Tailwind CSS เมื่อเทียบกับ CSS Framework อื่นๆ คืออะไร?',
    options: [
      'มี Component ให้เลือกใช้น้อย',
      'ต้องเขียน CSS มากกว่า',
      'มีความยืดหยุ่นในการปรับแต่งสูง',
      'มีขนาดไฟล์ใหญ่',
    ],
    correctAnswer: 2,
  },
];
