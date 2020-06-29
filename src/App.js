import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Pagination, Panel, RefinementList } from "react-instantsearch-dom";
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
    const tedInfos = `${hit.speakers[0]} ${hit.name}`;
    const tedPath = tedInfos.split(/\W/).filter(word => word !== "").join("_");
    const tedVideoUrl = `https://www.ted.com/talks/${tedPath}`;
    return (
      <div className="Hit">
        <h3 className="Hit-title">
          <a href={tedVideoUrl} target='_blank' rel="noopener noreferrer">{hit.name}</a>
        </h3>
    <p className="Hit-speaker">{hit.speakers[0]}</p>
        <img className="Hit-image" src={hit.image_url} alt=""/>
      </div>
    );
  };

  return (
    <InstantSearch searchClient={searchClient} indexName="talks">
      <h1 id="title"><span>TED</span> Talks</h1>
      <div className="content">
        <div className="left-panel">
          <div id="categories">
            {<Panel header="tags">
              <RefinementList
                attribute="tags"
              />
            </Panel>}
          </div>
        </div>
        <div className="right-panel">
          <div id="searchbox">
            {<SearchBox translations={{ placeholder: "Search talks..." }} />}
          </div>
          <div id="hits">
            {<Hits hitComponent={Hit}/>}
          </div>
          <div id="pagination">
            {<Pagination />}
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default App;
