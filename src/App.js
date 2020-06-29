import algoliasearch from 'algoliasearch';
import React from 'react';
import './App.css';

const client = algoliasearch('LRNJXNO42B', '25b590194234b396adb5f47435dd483d');

const index = client.initIndex('actors');

fetch('https://raw.githubusercontent.com/algolia/datasets/master/movies/actors.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (actors) {
    return index.saveObjects(actors, {
      autoGenerateObjectIDIfNotExist: true
    })
  })

index.search('williams').then(({ hits }) => {
  console.log(hits);
});

function App() {
  return (
    <div className="App">
      <h1>Algolia Search</h1>
    </div>
  );
}

export default App;
