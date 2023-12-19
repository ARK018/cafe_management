import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ProductForm } from "./product-form"

export default function ProductsView() {
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 10,
      category: "Food",
      description: "This is a pizza",
    },
    {
      id: 2,
      name: "Burger",
      price: 5,
      category: "Food",
      description: "This is a burger",
    },
    {
      id: 3,
      name: "Salad",
      price: 7,
      category: "Food",
      description: "This is a salad",
    },
  ])

  function onProductAdd(product) {
    setProducts([
      {
        id: products.length + 1,
        ...product,
      },
      ...products,
    ])
    setShowCreateDialog(false)
  }

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell className="text-lg">{product.name}</TableCell>

                <TableCell>
                  <span className="text-lg text-emerald-600">
                    ${product.price}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-lg">{product.category}</span>
                </TableCell>

                <TableCell>
                  <span className="text-lg text-muted-foreground italic">
                    {product.description}
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

      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogTrigger>
          <Button className="mt-5" variant="outline">
            Add Product
          </Button>
        </DialogTrigger>
        <DialogContent>
          <ProductForm onAdd={onProductAdd} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
