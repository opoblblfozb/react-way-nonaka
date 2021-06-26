import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';
import { useState } from 'react';

import { useState } from 'react';
import Child from './components/Child';

import { SearchBar } from './searchbar';
import { ProductTable } from './producttable';
import db from './db';

function FilterableProductTable() {
  const [filterText, setfilterText] = useState('iP');
  const [inStockOnly, setinStockOnly] = useState(false);
  const handlefilterchange = filterText => {
    setfilterText(filterText);
  };
  const handlestockonly = instockOnly => {
    setinStockOnly(instockOnly);
  };
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={e => handlefilterchange(e)}
        onInStockChange={e => handlestockonly(e)}
      />
      <ProductTable db={db} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));
