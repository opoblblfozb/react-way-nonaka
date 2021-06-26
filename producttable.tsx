import React, { Component } from 'react';

export function ProductTable(props) {
  return (
    <div>
      <div>
        <h4>Name 　　　Price</h4>
      </div>
      <ProductCategoryRow name={'Sporting Goods'} />
      <ProductRow
        name={'Sporting Goods'}
        db={props.db}
        filterText={props.filterText}
        inStockOnly={props.inStockOnly}
      />
      <ProductCategoryRow name={'Electronics'} />
      <ProductRow
        name={'Electronics'}
        db={props.db}
        filterText={props.filterText}
        inStockOnly={props.inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow(props) {
  return <h4>{props.name}</h4>;
}

function ProductRow(props) {
  const extractproduct = obj => {
    if (props.inStockOnly && obj.stocked === false) return;
    if (obj.category === props.name) {
      if (obj.name.indexOf(props.filterText) != -1) {
        return (
          <li>
            {obj.name} {obj.price}
          </li>
        );
      }
    }
  };
  const listItems = props.db.map(extractproduct);

  return <ul>{listItems}</ul>;
}
