interface Order {
  id: string;
  date: string;
  status: "placed" | "delivered";
  customerInfo: Customer;
  details: OrderItemInfo[];
}
