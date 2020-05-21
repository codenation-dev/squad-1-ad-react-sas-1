import React, {useState} from "react";

import './style.scss'

const Sizes = ({ className, sizes, onSelected }) => {
  const [selected,setSelected] = useState(null)

  const handleClick = (el) => {
    const newSelected = selected && el.size === selected['size'] ? null : el
    onSelected(newSelected)
    setSelected(newSelected)
  }

  return (
    <div className={`product-full__sizes ${className}`.trim()}>
      { sizes.map((el) => (
        <button
          key={el.size}
          onClick={() => handleClick(el)}
          className={`button_size ${
            selected && el.size === selected['size'] ? 'is--selected': ''
          }`.trim()}>{el.size}</button>)
      )}
    </div>
  )
}

Sizes.defaultProps = {
  sizes: []
}

export default Sizes;
