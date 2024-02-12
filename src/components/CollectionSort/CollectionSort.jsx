import React from 'react'
import "./CollectionSort.css"

const CollectionSort = ({label, arr}) => {
  return (
    <div className="collection-sort">
    <label>{label}</label>
    <select>
        {arr.map((option) =>
            <option value="/">{option}</option>
        )}
    </select>
</div>
  )
}

export default CollectionSort