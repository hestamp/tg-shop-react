import React from 'react'
import { useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

const products = [
  {
    id: '1',
    title: 'Куртка',
    price: 100,
    description: 'Чорна, тепла',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    id: '2',
    title: 'Куртка',
    price: 102,
    description: 'Біла, тепла',
    img: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    id: '3',
    title: 'Куртка',
    price: 101,
    description: 'Синя, тепла',
    img: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    id: '4',
    title: 'Штани',
    price: 40,
    description: 'Чорні, прямі',
    img: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    id: '5',
    title: 'Штани',
    price: 41,
    description: 'Сині, теплі',
    img: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: '6',
    title: 'Штани',
    price: 42,
    description: 'Білі, прямі',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: '7',
    title: 'Футболка',
    price: 35,
    description: 'Чорна, тепла',
    img: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: '8',
    title: 'Футболка',
    price: 34,
    description: 'Біла, тепла',
    img: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
  {
    id: '9',
    title: 'Футболка',
    price: 33,
    description: 'Синя, тепла',
    img: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
]

const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.price)
  }, 0)
}

const ProductList = () => {
  const [shopList, setShopList] = useState([])
  const { tg } = useTelegram()

  const onAdd = (product) => {
    const alreadyAdded = shopList.find((item) => item.id === product.id)
    let newItems = []
    if (alreadyAdded) {
      newItems = shopList.filter((item) => item.id !== product.id)
    } else {
      newItems = [...shopList, product]
    }

    setShopList(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Всього ${getTotalPrice(newItems)}`,
      })
    }
  }
  return (
    <div className={'list'}>
      {products.map((item, id) => (
        <ProductItem key={id} product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  )
}

export default ProductList
