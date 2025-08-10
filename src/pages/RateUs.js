import React, { useState } from 'react';
import './RateUs.css';

function RateUs() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="rate-container">
      <h2>قيم تجربتك معنا</h2>
      {!submitted ? (
        <>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= (hovered || rating) ? 'star filled' : 'star'}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="أخبرنا عن رأيك (اختياري)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button onClick={handleSubmit}>إرسال</button>
        </>
      ) : (
        <div className="thank-you">
          <h3>🙏 شكرًا لتقييمك!</h3>
          <p>رأيك يساعدنا في تحسين التطبيق باستمرار.</p>
        </div>
      )}
    </div>
  );
}

export default RateUs;
