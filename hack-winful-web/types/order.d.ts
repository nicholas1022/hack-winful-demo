interface Order {
  id: string;
  date: Date;
  status: "placed" | "delivered";
  customerInfo: Customer;
  details: OrderItemInfo[];
}
