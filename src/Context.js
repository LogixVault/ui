import { atom } from "jotai";

export const rowDataAtom = atom([
    {
      orderId: 1,
      date: "2022-03-01",
      customerName: "John Doe",
      itemsCount: 3,
      paymentMode: "Credit Card",
      status: "Pending",
    },
    {
      orderId: 2,
      date: "2022-03-02",
      customerName: "Jane Smith",
      itemsCount: 2,
      paymentMode: "PayPal",
      status: "Shipped",
    },
    {
      orderId: 3,
      date: "2022-13-02",
      customerName: "Jane Yadav",
      itemsCount: 7,
      paymentMode: "PayPal",
      status: "Accepted",
    },
    {
      orderId: 4,
      date: "2023-13-12",
      customerName: "John Rao",
      itemsCount: 4,
      paymentMode: "PayPal",
      status: "Delivered",
    },
  ]);
  
  