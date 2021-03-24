import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm.jsx';
import ChatFeed from './components/ChatFeed.jsx';

const  projectID="29a2db6a-4ffa-41fa-92d4-8f83b67624c8";
const App =()=>{
  if (!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
           height="100vh"
           projectID={projectID}
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
           onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
          />  
         );
}
export default App;
