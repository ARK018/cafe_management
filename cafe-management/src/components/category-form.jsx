/* eslint-disable react/prop-types */
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"

export function CategoryForm({ category, onAdd, onEdit }) {
  const isNewCategoryForm = category ? false : true

  const [name, setName] = useState(category?.name || "")

  return (
    <div className="flex flex-col gap-8 p-5">
      <h1 className="text-2xl font-semibold">
        {isNewCategoryForm ? "New" : "Edit"} Category
      </h1>

      <Input
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
        autoFocus
        placeholder="Category name"
      />
      <Button
        onClick={() =>
          isNewCategoryForm ? onAdd(name) : onEdit(category, name)
        }
        className="w-full"
      >
        {isNewCategoryForm ? "Create" : "Save"}
      </Button>
    </div>
  )
}
