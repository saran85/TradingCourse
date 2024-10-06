import React from 'react';

function Testimonial() {
  return (
    <section className="testimonial">
      <blockquote>
        <div style={{fontWeight:"lighter",fontSize:"4em", fontFamily:"fantasy",color:"GrayText"}}>
            ''
        </div>
        <p style={{fontWeight:"bolder",fontSize:"2rem"}}>"Trading with Grow Money has been a game-changer for my investment journey. Their insights and strategies are invaluable!"</p>
        <cite>- Alico / Investor <p className="stars">★★★★★</p></cite>
      </blockquote>
    </section>
  );
}

export default Testimonial;
