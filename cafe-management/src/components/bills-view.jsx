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

export default function BillsView() {
  const [bills] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      contactNumber: "1234567890",
      paymentMethod: "Cash",
      total: "100",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@gmail.com",
      contactNumber: "0123456890",
      paymentMethod: "Cash",
      total: "100",
    },
  ])

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bills.map((bill) => {
            return (
              <TableRow key={bill.id}>
                <TableCell className="text-lg">{bill.name}</TableCell>

                <TableCell>
                  <span className="text-lg">{bill.email}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg">{bill.contactNumber}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg">{bill.paymentMethod}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg text-emerald-600">
                    ${bill.total}
                  </span>
                </TableCell>

                <TableCell>
                  <Button variant="secondary">Edit</Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
