import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Starship = ({name}) => {
  const Name = name; 

  return (
 <div className="starship">{Name}</div>
  );
}

const App = () => {
  const [ starships, setStarships ] = useState([]);
  const [ starships1, setStarships1 ] = useState([]);
  const [ starships2, setStarships2 ] = useState([]);
  const [ starships3, setStarships3 ] = useState([]);
  
  useEffect(() => {
      let urls = [
        "https://swapi.dev/api/starships/?page=1",
        "https://swapi.dev/api/starships/?page=2",
        "https://swapi.dev/api/starships/?page=3",
        "https://swapi.dev/api/starships/?page=4",
      ]

      const requests = urls.map((url) => axios.get(url));
      let tmp=0
      axios.all(requests).then((responses) => {
        responses.forEach((resp) => {
          const data = resp.data;
          if (tmp===0)
          {setStarships(data.results);}
          else if (tmp===1)
          {setStarships1(data.results);}
          else if (tmp===2)
          {setStarships2(data.results);}
          else if (tmp===3)
          {setStarships3(data.results);}
          tmp++;
        });
      });
  });

  return (
    <div className="App">
      {       
       starships.map((ship,index) =>
          <Starship
            key={index}
            name={ship.name}
             />)     
      }
      {
        starships1.map((ship,index) =>
        <Starship
          key={index}
          name={ship.name}
           />)   
      }
      {
        starships2.map((ship,index) =>
        <Starship
          key={index}
          name={ship.name}
           />)
      }
      {
        starships3.map((ship,index) =>
        <Starship
          key={index}
          name={ship.name}
           />)
      } 
    </div>
  );
}

export default App;