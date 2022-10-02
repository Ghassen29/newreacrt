
import './App.css';
import Profil from './component/profil/Profil';
import Name from './component/profil/fullname/Name';
import Adresee from './component/profil/fullname/adresse/Adresse';


function App() {
  return (
    <div className="App">
   <Profil></Profil>
   <Name></Name>
   <Adresee></Adresee>

    </div>
  );
}

export default App;
