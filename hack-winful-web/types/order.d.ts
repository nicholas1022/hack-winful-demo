interface Order {
  orderId: string;
  date: string;
  status: "placed" | "delivered";
  address: string;
  companyName: string;
  contactName: string;
  email: string;
  orderDetails: OrderItemInfo[];
}
