import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <main className="App">
      <LoginButton/>
      <LogoutButton/>
      <p>The users informatins is below</p>
      <UserProfile/>
    </main>
  );
}

export default App;
