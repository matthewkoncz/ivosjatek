// Import React modules.
import React, { Component } from "react"

// Import cocktail logo for the back page of the card.
import card from "./../../../../img/cocktail.png";
import hu_logo from "./../../../../img/hu_logo.png";
import en_logo from "./../../../../img/en_logo.jpg";

// Import custom styles.
import "./../../../../css/style.css";
// Import animation styles.
import "./../../../../css/animate.css";

/**
 * The page contains the actual Card.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 * @param {string} props.currentLanguage Shortened version of the language. Changing the currentLanguage property triggers an update at the language change.
 */
export default class Card extends Component {

  constructor() {
    super();
    this.state = {
      flipClasses: "animated bounceInLeft"
    };
  }

  render() {

    let isNextButtonHidden = false;

    let content;
    if (this.props.children === "language") {
      content = this.createLanguageSelectorCard();
      isNextButtonHidden = true;
    } else {
      content = this.props.children;
    }
    return (
      <div id="lap1" className={`flip-container ${this.state.flipClasses}`} align="center" onClick={this.cardClickHandler}>
        <div className="flipper" >
          <div className="back">
            <img className="back_img" src={card} height="100%" width="100%" alt="back" />
          </div>
          <div className="front">
            <div id="kerdes1" className="txt-question">  {content} </div>
            <button
              className={`btn btn-warning btn-lg btn-card ${isNextButtonHidden ? "hidden" : ""}`}
              onClick={this.replaceCard}>
              {this.props.i18n.t("game.next")}
            </button>
          </div>
        </div>
      </div>
    )
  }

  /**
   * Replaces the read card.
   * Bounces out the read card and bounces in the new card.
   * Uses the animations of the animate.css.
   */
  replaceCard = () => {

    let that = this;

    // Bounces out the current card.
    setTimeout(function () {
      that.setState({
        flipClasses: "active animated bounceOutRight"
      });
    }, 25);

    // Bounces in the new card.
    setTimeout(function () {
      that.setState({
        flipClasses: "animated bounceInLeft"
      });
    }, 450);

    if (this.state.children !== "language") {
      this.props.setNewQuestion();
    }
  };

  /**
   * Handles the click event on the unread cards.
   */
  cardClickHandler = () => {
    this.setState({
      flipClasses: "active",
    });
  }

  createLanguageSelectorCard = () => {
    return (
      <div>
        <p>Select a language.</p>
        <p>
          <span>
            <img onClick={this.selectEnglish} className="lang-logo lang-logo-big" src={en_logo} alt="english-logo" />
          </span>
          <span>
            <img onClick={this.selectHungarian} className="lang-logo lang-logo-big" src={hu_logo} alt="hungarian-logo" />
          </span>
        </p>
      </div>
    )
  }

  /**
   * Sets the selected language to English and draws the next card.
   */
  selectEnglish = () => {
    this.props.selectEnglish();
    this.replaceCard();
  }

  /**
   * Sets the selected language to Hungarian and draws the next card.
   */
  selectHungarian = () => {
    this.props.selectHungarian();
    this.replaceCard();
  }

}