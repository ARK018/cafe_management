/* eslint-disable react/prop-types */
import React from "react"
import { Input } from "./ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"

export function ProductForm({ onAdd }) {
  const [name, setName] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [description, setDescription] = React.useState("")

  function onNameChange(event) {
    setName(event.target.value)
  }

  function onPriceChange(event) {
    setPrice(event.target.value)
  }

  function onCategoryChange(value) {
    setCategory(value)
  }

  function onDescriptionChange(event) {
    setDescription(event.target.value)
  }

  console.log(name, price, category, description)

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">New Product</h1>
      <div>
        <div className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-widest font-semibold text-muted-foreground"
            >
              Name
            </label>

            <Input type="text" value={name} onChange={onNameChange} />
          </div>

          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="price"
              className="text-xs uppercase tracking-widest font-semibold text-muted-foreground"
            >
              Price
            </label>

            <Input type="text" value={price} onChange={onPriceChange} />
          </div>

          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="category"
              className="text-xs uppercase tracking-widest font-semibold text-muted-foreground"
            >
              Category
            </label>

            <Select onValueChange={onCategoryChange}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="drinks">Drinks</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="description"
              className="text-xs uppercase tracking-widest font-semibold text-muted-foreground"
            >
              Description
            </label>

            <Textarea
              type="text"
              value={description}
              onChange={onDescriptionChange}
            />
          </div>

          <Button
            onClick={() => {
              onAdd({
                name: name,
                price: price,
                category: category,
                description: description,
              })
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}
