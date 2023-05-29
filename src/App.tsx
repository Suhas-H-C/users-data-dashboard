import { useState } from 'react';
import User from './components/users/User';

function App() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let [userData, setData] = useState([]);

  return (
    <div >
      <User url={url} actualData={userData} onDataChange={setData} />
    </div>
  );
}

export default App;
