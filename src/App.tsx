import { Container } from '@mui/material';
import { TasksContainer } from './components/TasksContainer';
import './App.css';

function App() {
  return (
    <Container>
      <div className={'AppWrap'}>
        <TasksContainer />
      </div>
    </Container>
  );
}

export default App;
