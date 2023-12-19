import { useState } from "react"
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Button } from "./ui/button"

export default function OrdersView() {
  const [orders] = useState([
    {
      id: 1,
      name: "John Doe",
      category: "Pizza",
      price: "15",
      quantity: "3",
      total: "45",
    },
    {
      id: 2,
      name: "Jane Doe",
      category: "Salad",
      price: "5",
      quantity: "2",
      total: "10",
    },
  ])

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            return (
              <TableRow key={order.id}>
                <TableCell className="text-lg">{order.name}</TableCell>

                <TableCell>
                  <span className="text-lg">{order.category}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg text-emerald-600">
                    ${order.price}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-lg">{order.quantity}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg  text-emerald-600">
                    ${order.total}
                  </span>
                </TableCell>

                <TableCell>
                  <Button variant="secondary">Delete</Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
