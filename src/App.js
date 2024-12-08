
import Login from './components/Login-page/Login';
import Login1 from './components/Login-page/Login1';
import PatientsHistory from './components/Login-page/PatientHistory';
import RegisterOperary from './components/Login-page/RegisterOperary';
import RegisterAdmin from './components/Login-page/RegisterAdmin';
import EditUserHistory from './components/Login-page/EditUserHistory';
import EditMedication from './components/Login-page/EditMedication';
import EditMed from './components/Login-page/EditMed';
import Medication from './components/Login-page/Medication';
import FrontPage from './components/Login-page/frontPage';

function App() {
  return (
    <div className="App">
      <Login />
      <Login1 />
      <FrontPage />
      <PatientsHistory />
      <RegisterOperary />
      <RegisterAdmin />
      <EditUserHistory />
      <EditMed />
      <EditMedication />
      <Medication />
  
    </div>
  );
}

export default App;
