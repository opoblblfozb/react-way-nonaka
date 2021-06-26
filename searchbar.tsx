import React, { Component } from 'react';

export function SearchBar(props) {
  function handleInStockChange(e) {
    props.onInStockChange(e);
  }
  return (
    <div>
      <form>
        <p>
          <input
            type="text"
            name="query"
            value={props.filterText}
            onChange={e => props.onFilterTextChange(e.target.value)}
          />
        </p>
        <input
          type="checkbox"
          name="isstocked"
          checked={props.inStockOnly}
          onChange={e => props.onInStockChange(e.target.checked)}
        />
        <text>Only show products in stock</text>
      </form>
    </div>
  );
}
