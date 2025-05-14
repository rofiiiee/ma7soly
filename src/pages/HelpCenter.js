import React, { useState } from 'react';
import './HelpCenter.css';

const faqList = [
  {
    question: 'كيف يمكنني إنشاء حساب؟',
    answer: 'يمكنك الضغط على زر "إنشاء حساب" من الصفحة الرئيسية وملء البيانات المطلوبة مثل الاسم والبريد وكلمة المرور.'
  },
  {
    question: 'كيف أضيف منتج؟',
    answer: 'من القائمة الجانبية اختر "إضافة منتج"، ثم أدخل اسم المنتج، النوع، السعر، الصورة، والوصف وانقر على زر نشر.'
  },
  {
    question: 'هل يمكنني تعديل بياناتي؟',
    answer: 'نعم، من خلال صفحة "حسابي" يمكنك تعديل الاسم، البريد، رقم الهاتف، وحتى الصورة الشخصية.'
  },
  {
    question: 'كيف أتواصل مع الدعم الفني؟',
    answer: 'يمكنك مراسلتنا على البريد support@agriplatform.com أو من خلال صفحة التواصل أسفل التطبيق.'
  }
];

function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h2>مركز المساعدة</h2>
      {faqList.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <i className="fas fa-question-circle"></i>
            {item.question}
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default HelpCenter;
