import React, {useState} from "react";

import './style.scss'

const Sizes = ({ sizes, onSelected }) => {
  const [selected,setSelected] = useState(null)

  const handleClick = (size) => {
    const newSelected = size === selected ? null : size
    onSelected(newSelected)
    setSelected(newSelected)
  }

  return (
    <div className="product-full__sizes">
      { sizes.map(({ size }) => (
        <button
          key={size}
          onClick={() => handleClick(size)}
          className={`button_size ${
            size === selected ? 'is--selected': ''
          }`}>{size}</button>)
      )}
    </div>
  )
}

Sizes.defaultProps = {
  sizes: []
}

export default Sizes;
