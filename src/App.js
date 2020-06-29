import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Pagination } from "react-instantsearch-dom";
import React from 'react';
import './App.css';

const searchClient = algoliasearch('LRNJXNO42B', '25b590194234b396adb5f47435dd483d');

const index = searchClient.initIndex('talks');

fetch(
  "https://raw.githubusercontent.com/algolia/datasets/master/tedtalks/talks.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (talks) {
    return index.saveObjects(talks, {
      autoGenerateObjectIDIfNotExist: true,
    });
  });

function App() {

  const Hit = ({ hit }) => {
    return (
      <div className="Hit">
        <h3 className="Hit-title">{hit.name}</h3>
    <p className="Hit-speaker">{hit.speakers[0]}</p>
        <img className="Hit-image" src={hit.image_url} alt=""/>
      </div>
    );
  };

  return (
    <InstantSearch searchClient={searchClient} indexName="talks">
      <h1 id="title"><span>TED</span> Talks</h1>
      <div id="searchbox">
        {<SearchBox translations={{ placeholder: "Search talks..." }} />}
      </div>
      <div id="hits">
        {<Hits hitComponent={Hit}/>}
      </div>
      <div id="pagination">
        {/* Uncomment the following widget to add pagination */}
        {<Pagination />}
      </div>
    </InstantSearch>
  );
}

export default App;
