import { dateFormatter } from "./dateFormatter";
import { todayDate } from "./todayDate";

export const  inventoryData =  [
    {
        id: 1,
        isCheck: false,
        dateUpdate: dateFormatter(todayDate()),
        title: "Hammar",
        details: "This is a hammer to do work with",
        status: "Al Right",
        quantity: "200",
        quantityTotal: "300",
        price: "$10",
        amount: "$2000.00"

    }
];