import './App.css';
import Category from './components/Category';
import reactionIcon from './assets/icon-reaction.svg';
import memoryIcon from './assets/icon-memory.svg';
import verbalIcon from './assets/icon-verbal.svg';
import visualIcon from './assets/icon-visual.svg';

function App() {

  return (
    <div className="main-container">
      <div className="main-inner-container">
        <div className="result-container">
          <p>Your Result</p>
          <div className="score-container">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <div className="result-desc-container">
            <h2>Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        <div className="summary-container">
          <div>
            <h3>Summary</h3>
            <div className="categories-score-container">
              <Category imgSrc={reactionIcon} color="red" name="Reaction" score="80" />
              <Category imgSrc={memoryIcon} color="yellow" name="Memory" score="92" />
              <Category imgSrc={verbalIcon} color="green" name="Verbal" score="61" />
              <Category imgSrc={visualIcon} color="blue" name="Visual" score="72" />
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
