import React, { Component } from 'react';
import './FilterBar.css';


class FilterBar extends Component {

  render() {
    return (
      <div className="filter-bar">
        <div className="filter-bar-item filter-bar-item-label">Filter Recipes:</div>
        <div className="filter-bar-item filter-bar-item--selectable" title="New">New</div>
        <div className="filter-bar-item-separator"></div>
        <div className="filter-bar-item filter-bar-item--selectable" title="Popular">Popular</div>
        <div className="filter-bar-item-separator"></div>
        <div className="filter-bar-item filter-bar-item--selectable" title="Breakfast">Breakfast</div>
        <div className="filter-bar-item-separator"></div>
        <div className="filter-bar-item filter-bar-item--selectable" title="Lunch">Lunch</div>
        <div className="filter-bar-item-separator"></div>
        <div className="filter-bar-item filter-bar-item--selectable" title="Dinner">Dinner</div>
        <div className="filter-bar-item-separator"></div>
        <div className="filter-bar-item filter-bar-item--selectable" title="Dessert">Dessert</div>
        <div className="filter-bar-item-separator"></div>
        <div className="filter-bar-item filter-bar-item--selectable" title="Drinks">Drinks</div>

      </div>
    );
  }
}

export default FilterBar;