import { useState } from 'react';
import PlayAround from './components/play-around-components/PlayAround';
import User from './components/play-around-components/User';

function App() {
  const urlForUsers = "https://jsonplaceholder.typicode.com/users";
  const urlForPosts = "https://jsonplaceholder.typicode.com/posts";

  let [userData, setData] = useState([]);

  return (
    <div >
      <User urlForUsers={urlForUsers}
        urlForPosts={urlForPosts}
        actualUsersData={userData} onDataChange={setData} />

      <PlayAround />
    </div>
  );
}

export default App;
