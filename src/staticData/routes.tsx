import Accordion from "../components/accordian/Accordion"
import Captia from "../components/Captia"
import Carousel from "../components/Carousel"
import ChangeBg from "../components/ChangeBg"
import ConversionTemp from "../components/ConversionTemp"
import FreeEx2 from "../components/FreeEx2"
import FreeEx3 from "../components/FreeEx3"
import Home from "../components/Home"
import JokeGenerator from "../components/JokeGenerator"
import KahootQuiz from "../components/KahootQuiz"
import MatchingGame from "../components/MatchingGame/MatchingGame"
import OfficialQuoteGenerator from "../components/OfficialQuoteGenerator"
import FreeEx1 from "../components/FreeEx1"
import Quiz from "../components/Quiz"
import ReduxExper from "../components/ReduxExper"
import SimpleCounter from "../components/SimpleCounter"
import StopWatch from "../components/StopWatch"
import TicTacToe from "../components/TicTacToe"
import TodoList from "../components/TodoList"
import TodoList2 from "../components/TodoList2"
import WeightConverter from "../components/WeightConverter"
import Filter from "../components/Filter"

const routes = [
  { path: '/', title: 'Home', component: Home },
  { path: '/simple-counter', title: 'Simple Counter', component: SimpleCounter },
  { path: '/stopwatch', title: 'Stopwatch', component: StopWatch},
  { path: '/todos', title: 'Todos', component: TodoList },
  { path: '/converting-temperatures', title: 'Converting Temperatures', component: ConversionTemp},
  { path: '/captia', title: 'Captia', component: Captia },
  { path: '/matching-game', title: 'Matching Game', component: MatchingGame },
  { path: '/tictactoe', title: 'TicTacToe', component: TicTacToe },
  { path: '/quiz', title: 'Quiz', component: Quiz },
  { path: '/carousel', title: 'Carousel', component: Carousel },
  { path: '/joke-generator', title: 'Joke Generator', component: JokeGenerator },
  { path: '/weight-converter', title: 'Weight Converter', component: WeightConverter },
  { path: '/kahoot-quiz', title: 'Kahoot Quiz', component: KahootQuiz },
  { path: '/quote-generator', title: 'Quote Generator', component: OfficialQuoteGenerator },
  { path: '/redux-example', title: 'Redux examp', component: ReduxExper },
  { path: '/todo2', title: 'Todo2', component: TodoList2 },
  { path: '/free-ex1', title: "FreeEx1", component: FreeEx1 },
  { path: '/free-ex2', title: "FreeEx2", component: FreeEx2 },
  { path: '/free-ex3', title: "FreeEx3", component: FreeEx3 },
  { path: '/change-bg', title: "Change Bg Color", component: ChangeBg },
  { path: '/accordion', title: "Accordion", component: Accordion },
  { path: '/testimonials', title: "Testimonials" },
  { path: '/filter', title: "Filter", component: Filter },
  // { path: '/calculator', title: "Calculator" },
  // { path: '/', title: "Tip Form" },
  // { path: '/', title: "Course Form " },
  // { path: '/', title: "Budget Application " },
  // { path: '/random-person', title: "Random Person AJAX" },
  // { path: '/analogue-clock', title: "Analogue Clock" },
  // { path: '/quote-of-day', title: "Quote of the Day" },
  // { path: '/word-count-tool', title: "Word Count Tool" },
  // { path: '/contact-form', title: "Contact Form (local storage)" },
  // { path: '/day-of-week', title: "Day of the Week" },
  // { path: '/', title: "Addition Game " },
  // { path: '/', title: "Countdown Timer " },
  // { path: '/', title: "Balloon Popping Game" },
  // { path: '/rss-feed', title: "RSS feed for BBC" },
  // { path: '/number-guess-game', title: "Number Guessing Game" },
  // { path: '/height-conversion', title: "Height Conversion" },
  // { path: '/', title: "Wack A Mole" },
  // { path: '/notes', title: "Notes App " },
  // { path: '/todo-filter', title: "To Do App with Filter" },
  // { path: '/', title: "Hangman App " },
  // { path: '/', title: "Recipe App " },
  // { path: '/', title: "Drum Kit " },
  // { path: '/progress-bar', title: "Progress Bar" },
  // { path: '/random', title: "Random Meal Generator" },
  // { path: '/', title: "Smooth Scroll Click" },
  // { path: '/', title: "SlideShow button" },
  // { path: '/', title: "Star Rating System" },
  // { path: '/', title: "Live Website Visits Counter" },
  // { path: '/', title: "File Upload " },
  // { path: '/', title: "Password Strength " },
  // { path: '/', title: "Custom Video Player" },
  // { path: '/', title: "Sort A Table " },
  // { path: '/', title: "Beat Maker " },
  // { path: '/', title: "Piano button" },
  // { path: '/', title: "Name Generator " },
  // { path: '/', title: "Calender button" },
  // { path: '/', title: "Speed Typing Test" },
  // { path: '/', title: "Click and Drag to Scroll" },
  // { path: '/', title: "Meditation App " },
  // { path: '/', title: "Booklist App " },
  // { path: '/', title: "Weather App " },
  // { path: '/', title: "Pin Pad Begin Screen" },
  // { path: '/', title: "Url Shortner " },
  // { path: '/', title: "Virtual Keyboard " },
  // { path: '/', title: "Shopping Cart " },
  // { path: '/', title: "Text to Speech " },
  // { path: '/', title: "Rock Paper Scissors" },
  // { path: '/', title: "Memory Game " },
  // { path: '/', title: "Connect Four " },
  // { path: '/', title: "Tetris button" },
]

export default routes