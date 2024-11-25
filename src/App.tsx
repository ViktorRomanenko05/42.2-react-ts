import './App.css';

//lessons
import Lesson06 from './lessons/Lesson06/Lesson06';
import Counter from "./components/Counter/Counter";
import Feedback from "./components/Feedback/Feedback";
import Input from "./components/Input/Input";
import LoginForm from "./components/LoginForm/LoginForm";

//homeworks

//consultations

function App() {
    return (
        <div className="App">
            {/*<Lesson06 />*/}
            {/*<Counter />*/}
            {/*<Feedback />*/}
            {/*<Input inputParameters=*/}
            {/*           {{*/}
            {/*               name: "test input",*/}
            {/*               type: "text",*/}
            {/*               placeholder: "try input",*/}
            {/*               label: "Test input"*/}
            {/*           }}/>*/}
            <LoginForm/>
        </div>
    );
}

export default App;