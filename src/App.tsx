import GlobalStyles from './styles/GlobalStyles';
import Lesson08 from "./lessons/lesson08/Lesson08";
import Homework08 from "./homeworks/Homework08/Homework08";
import Homework09 from "./homeworks/Homework09/Homework09";

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';


//homeworks
// import Homework07 from './homeworks/Homework07/Homework07';

//consultations
// import Consultation04 from './consultations/Consultation04/Consultation04';


function App() {
    return (
        <>
            <GlobalStyles/>
            {/* <Lesson06 /> */}
            {/* <Lesson07 /> */}
            {/* <Consultation04 /> */}
            {/* <Homework07 /> */}
            {/*<Lesson08 />*/}
            {/*<Homework08/>*/}
            <Homework09/>
        </>
    );
}

export default App;