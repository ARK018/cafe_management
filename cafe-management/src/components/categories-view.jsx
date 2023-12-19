import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PlusIcon } from "./ui/icons"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { CategoryForm } from "./category-form"

export default function CategoriesView() {
  const [showDialog, setShowDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Pizza",
    },
    {
      id: 2,
      name: "Burger",
    },
    {
      id: 3,
      name: "Salad",
    },
    {
      id: 4,
      name: "Drink",
    },
  ])

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70%]">Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => {
            return (
              <TableRow key={category.id}>
                <TableCell className="text-lg">{category.name}</TableCell>

                <TableCell>
                  <Dialog
                    open={showEditDialog}
                    onOpenChange={setShowEditDialog}
                  >
                    <DialogTrigger asChild>
                      <Button variant="secondary">Edit</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <CategoryForm
                        category={category}
                        onEdit={(category, name) => {
                          const updatedCategories = categories.map((c) => {
                            if (c.id === category.id) {
                              return {
                                ...c,
                                name,
                              }
                            }
                            return c
                          })
                          setCategories(updatedCategories)

                          setShowEditDialog(false)
                        }}
                      />
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogTrigger asChild>
          <Button className="mt-5" variant="outline">
            <PlusIcon />
            Category
          </Button>
        </DialogTrigger>
        <DialogContent>
          <CategoryForm
            onAdd={(value) => {
              setCategories([
                ...categories,
                {
                  id: categories.length + 1,
                  name: value,
                },
              ])
              setShowDialog(false)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
