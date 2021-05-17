import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from 'react-router-dom';

const Hello = () => <h1>Hello</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
