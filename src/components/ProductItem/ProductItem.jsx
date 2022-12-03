import React from 'react'
import './ProductItem.css'
import Button from '../Button/Button'
const ProductItem = ({ product, className, onAdd }) => {
  const onnAddHandler = () => {
    onAdd(product)
  }

  return (
    <div className={'product'}>
      <div className={'imgBlock'}>
        <img className="img" src={product.img} />
      </div>
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>
          Вартість: <b>{product.price}</b>
        </span>
      </div>
      <Button className={'add-btn'} onClick={onnAddHandler}>
        Додати
      </Button>
    </div>
  )
}

export default ProductItem
