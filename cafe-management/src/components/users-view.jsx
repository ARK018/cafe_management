import { useState } from "react"
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Switch } from "@/components/ui/switch"

export default function UsersView() {
  const [users] = useState([
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      contact_number: "1036478345",
    },
    {
      id: 2,
      name: "User 1",
      email: "user1@gmail.com",
      contact_number: "1046578392",
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
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell className="text-lg">{user.name}</TableCell>

                <TableCell>
                  <span className="text-lg">{user.email}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg">{user.contact_number}</span>
                </TableCell>

                <TableCell>
                  <Switch />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
