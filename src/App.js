import { Routes, Route } from 'react-router-dom';
import './App.css';
import { DevOpsQuiz } from './Components/DevOps';
import { DockerQuiz } from './Components/Docker';
import { Home } from './Components/Home';
import { LinuxQuiz } from './Components/Linux';
import {Result} from './Components/result'

function App() {
  return (
    <div className="App">
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
