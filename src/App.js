
import './App.css';
import ContactManager from './component/ContactManager';

const contacts = ['Ekene Ugwuanyi', 'Chizzy Okaf', 'James Ugwuanyi', 'Martha Ugwuanyi']
function App() {
  return (
    <div>
   <ContactManager data={contacts}/>
    </div>
  );
}

export default App;
