import { Routes, Route } from 'react-router-dom';
import './App.css';
import { DevOpsQuiz } from './Components/DevOps';
import { DOckerQuiz } from './Components/Docker';
import { Home } from './Components/Home';
import { LinuxQuiz } from './Components/Linux';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/linux" element={<LinuxQuiz />} />
        <Route path= "/devops" element={<DevOpsQuiz />} />
        <Route path= "/docker" element={<DOckerQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
