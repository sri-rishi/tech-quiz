import { Routes, Route, Navigate, useLocation} from 'react-router-dom';
import './Styles/App.scss';
import { DevOpsQuiz } from './Components/DevOps';
import { DockerQuiz } from './Components/Docker';
import { Home } from './Components/Home';
import { LinuxQuiz } from './Components/Linux';
import {Result} from './Components/result';
import {useData } from "./Context/dataContext";


function App() {
  const {state} = useLocation();
  const {categoryParam} = useData();
  return (
    <div className="App">
      {/* <Navigate  replace state={state}/> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/linux" element={<LinuxQuiz />} />
        <Route path= "/devops" element={<DevOpsQuiz />} />
        <Route path= "/docker" element={<DockerQuiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
