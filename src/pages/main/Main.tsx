import React, {useState} from "react";
import "./Main.css";
import family from "../../images/family.png";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import arrowDown from "../../images/arrowDown.png";
import column1Bg from "../../images/bg3.png";
import ShareIcon from "@material-ui/icons/Share";
import backBtn from '../../images/Back.png';
import prizes from '../../images/gifts.png';
import { FullView } from "../../components/modals/fullview/FullView";

export const Main = () => {
  const [open1, setOpen1] = useState(false);
  const handleClose = () => {
    setOpen1(false);
  }
  return (
    <div id="main">
      <FullView open={open1} handleClose={handleClose} />
      <div className="container">
        <div className="back-btn">
          <img src={backBtn} alt="back" />
        </div>
        <div className="wrapper">
          <div className="column1-nested1__bg">
            <img src={column1Bg} alt="ball" />
          </div>
          <div className="column column1">
            <div className="column1-nested column1-nested1">
              <div className="column1-nested1-column column1-nested1-column1">
                <h4>About EPL</h4>
                <div className="column1-nested1-column1-img">
                  <img src={family} alt="family" />
                  <div
                    onClick={() => setOpen1(true)}
                    className="column1-nested1-column1-img__icon"
                  >
                    <PlayCircleOutlineIcon />
                  </div>
                </div>
                <h5>Let's Take A Tour</h5>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
              </div>
              <div className="column1-nested1-column column1-nested1-column2">
                <h5>
                  EPL is designed by experts. This will test your preparedness,
                  peer ranking and get real time performance analytics.
                </h5>
                <ul>
                  <li>
                    Attempt the Extramarks Premier League and have fun
                    attempting cricket related questions.
                  </li>
                  <li>Get your global rank and score instantly.</li>
                </ul>
                <img src={arrowDown} alt="expand" />
              </div>
            </div>
            <div className="column1-nested column1-nested2">
              <div className="column1-nested2_column column1-nested2_column1">
                <div className="c1n1-row1">
                  <p>Scoreboard</p>
                  <p>Rank 6</p>
                </div>
                <div className="c1n1-row2">
                  <div className="progress">
                    <p>7/10</p>
                    <p>Runs</p>
                  </div>
                  <div className="showData">
                    <div className="showData-row">
                      <div></div>
                      <p>07 Correct Answers</p>
                    </div>
                    <div className="showData-row">
                      <div></div>
                      <p>03 Wrong Answers</p>
                    </div>
                  </div>
                </div>
                <button className="viewNow-button">View Now</button>
              </div>
              <div className="column1-nested2_column column1-nested2_column2">
                <h5>Prizes</h5>
                <img src={prizes} alt="gifts" />
                <br />
                <button className="viewNow-button">View Now</button>
              </div>
            </div>
          </div>
          <div className="column column2">
            <div className="column2-overImg"></div>
            <div className="column2-container">
              <h5>Steps to win exciting prizes</h5>
              <div className="column2-nested">
                <div className="column2-nested-column">
                  <p>1</p>
                  <p>Start Quizzing</p>
                </div>
                <div className="column2-nested-column">
                  <p>2</p>
                  <p>Score Well</p>
                </div>
                <div className="column2-nested-column">
                  <p>3</p>
                  <p>Share on social media</p>
                </div>
              </div>
              <div className="column2-nested1">
                <p>Starts in: 01d 18h 55m 11s</p>
                <button>Let's Play</button>
              </div>
              <div className="column2-nested2">
                <button>Play Quiz Previous Questions</button>
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
