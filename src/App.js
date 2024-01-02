import './App.css';
import Button from './components/Button'
import TestList from './components/TestList';
import Hooks from './components/Hooks';
import Conditional from './components/Conditional';
import Container from './components/Container';

function App() {
    return (
    <div className="App">
        <Button label='Click Here' />
        <TestList />
        <Hooks />
        <Conditional x='9'/>
        <Container>
            <Button label='Button 1' />
            <Button label='Button 2' />
            <Button label='Button 3' />
        </Container>
    </div>
    );
}

export default App;
