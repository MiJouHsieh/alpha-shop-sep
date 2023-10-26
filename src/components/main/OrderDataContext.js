import { useState, createContext, useContext } from "react";
import {cardInfoData} from 'components/main/MainData'
import {CartProductContext} from "components/main/cart/CartContext.js";
export const OrderDataContext = createContext()

export const OrderDataProvider = ({children}) => {
  const [cardValue, setCardValue] = useState(cardInfoData)
  const productsData = useContext(CartProductContext)

  let totalPrice = productsData
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur);

  function handleSubmitBtn(buttonName) {
    if(buttonName === 'Submit' ) {
      console.log(`
      ${cardValue[0].label}: ${cardValue[0].value}
      ${cardValue[1].label}: ${cardValue[1].value}
      ${cardValue[2].label}: ${cardValue[2].value}
      ${cardValue[3].label}: ${cardValue[3].value}
      
      總金額 ${totalPrice}
      
      `)
    }
  }

  const providerValue = {cardValue, setCardValue, productsData, totalPrice, onSubmitButton: handleSubmitBtn}
  return (
    <OrderDataContext.Provider value={providerValue}>
      {children}
    </OrderDataContext.Provider>
  )
}