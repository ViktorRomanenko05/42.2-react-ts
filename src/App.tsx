import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Users from "./components/pages/Users/Users";


//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson11 from 'lessons/Lesson11/Lesson11';
import Lesson13 from 'lessons/Lesson13/Lesson13';
import Clients from "./components/pages/Clients/Clients";
import Chainlink from "./components/pages/Clients/components/Chainlink/Chainlink";
import Ontology from "./components/pages/Clients/components/Ontology/Ontology";
import Storj from "./components/pages/Clients/components/Storj/Storj";

//homeworks
// import Homework07 from './homeworks/Homework07/Homework07';
// import Homework08 from './homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import Homework11 from 'homeworks/Homework11/Homework11';

//consultations
// import Consultation04 from './consultations/Consultation04/Consultation04';
// import Consultation05 from 'consultations/Consultation05/Consultation05';


function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/clients/chainlink' element={<Chainlink />} />
                    <Route path='/clients/ontology' element={<Ontology />} />
                    <Route path='/clients/storj' element={<Storj />} />
                    <Route path='/lesson13' element={<Lesson13 />} />
                    <Route path='*' element='Page not found' />
                </Routes>
            </Layout>
            {/* <Lesson06 /> */}
            {/* <Lesson07 /> */}
            {/* <Consultation04 /> */}
            {/* <Homework07 /> */}
            {/* <Lesson08 /> */}
            {/* <Homework08 /> */}
            {/* <Lesson09 /> */}
            {/* <Consultation05 /> */}
            {/* <Homework09 /> */}
            {/* <Lesson11 /> */}
            {/* <Homework11 /> */}
        </BrowserRouter>
    );
}

export default App;