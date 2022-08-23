import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import alpharius from '../../assets/alpharius.png';

const Header = () => {
  return (
    <div className="alpha__header section__padding" id="home">
      <div className="alpha__header-content">
        <h1 className="gradient__text">Join the amazing Alpha Legion now!</h1>
        <p>Of course, you might feel confused – don’t worry. That’s to be expected when getting to know the Alpha Legion. Rather than predictable stubbornness or blatant violence, the XX Legion prides itself on subtlety, and keeps much of its past to itself. Fortunately, we’re on hand to give you the truth, the whole truth, and nothing but the truth.</p>
          <br />
          <p>Ultimately, you can trust us.</p>

        <div className="alpha__header-content__input">
          <input type="email" placeholder="Your Email Please" />
          <button type="button">Learn Moore</button>
        </div>

        <div className="alpha__header-content__people">
          <img src={people} alt="people already in alpha lgeion" srcset="" />
          <p>1700 million "people" have already joined in the last 24 hours, don't miss out!</p>
        </div>
        <div className="alpha__header-image">
          <img src={alpharius} alt="the great one" />
        </div>
      </div>
    </div>
  )
}

export default Header