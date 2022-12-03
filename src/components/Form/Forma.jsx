import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Forma.css'
const Forma = () => {
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [poshta, setPoshta] = useState('nova')
  const { tg } = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Надіслати',
    })
  }, [])
  useEffect(() => {
    if (!street || !city) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, city])

  const onChangeCity = (e) => {
    setCity(e.target.value)
  }
  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }
  const onChangePoshta = (e) => {
    setPoshta(e.target.value)
  }

  return (
    <div className="form">
      <h3>Введіть ваші дані</h3>
      <input
        value={city}
        onChange={onChangeCity}
        className={'input'}
        type="text"
        placeholder="Місто"
      ></input>
      <input
        value={street}
        onChange={onChangeStreet}
        className={'input'}
        type="text"
        placeholder="Вулиця"
      ></input>
      <select className="select" value={poshta} onChange={onChangePoshta}>
        <option value={'nova'}>Нова пошта</option>
        <option value={'stara'}>Стара пошта</option>
      </select>
    </div>
  )
}

export default Forma
