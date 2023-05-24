import { clear } from "@testing-library/user-event/dist/clear";
import React, { Component, useContext, useEffect } from "react";
import { DataContext } from "../Context";

const PaymentCompleted = () => {
    const { cart, total, payment, clearCart } = useContext(DataContext)




    return (


        < div >
            <img src="https://cdn4.iconfinder.com/data/icons/eshop/403/37-512.png"></img>
            <p>Siparişiniz alınmıştır sipariş detayları mail adresinize gönderilmiştir.</p>

        </div >
    )


}
export default PaymentCompleted