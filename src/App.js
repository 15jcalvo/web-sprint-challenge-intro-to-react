import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films')
    .then(res => {
      // console.log(res);
      //retrieve characters per title
      const allCharacters = [];
      res.data.results.forEach(titleChars => {
        allCharacters.push(titleChars.characters);
        // console.log(allCharacters);
      })
      //compile list of location for all character data in one array
      const allCharactersLocation = [];
      allCharacters.forEach(charList =>{
        charList.forEach(charLoc => {
          allCharactersLocation.push(charLoc);
        })
        // console.log(allCharactersLocation);
      })
      //retrieve character data
      const characterDataProxy = [];
      allCharactersLocation.forEach(char =>{
        axios.get(char)
        .then(res => {
          // console.log(res);
          characterDataProxy.push(res.data);
          // console.log(characterData);
        })
        .catch(err => {
          console.error(err);
        })
      })
      // console.log(characterDataProxy);
      //set state as character data
      setCharacterData(characterDataProxy);
    })
      
    .catch(err =>{
      console.error(err);
    })
  }, [])
console.log(characterData)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
