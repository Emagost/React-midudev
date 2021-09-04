import React, {useState} from 'react';
import './App.css';

function App() {
  const [cats,updateCats] = useState(['https://http.cat/200'])
  return (
    <div className="App">
      <section className="App-content">
        <img src={cats}/>
      </section>
    </div>
  );
}

export default App;
