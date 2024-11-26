import { Label } from "@/components/ui/label"
import React from "react";
import { categories } from "@/utils/categories";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {

  const name = 'category'
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">{name}</Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {
            categories.map((item) => {
              return <SelectItem key={item.label} value={item.label}>
                <span className="capitalize flex items-center gap-4">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            })
          }


        </SelectContent>
      </Select>

    </div>
  )
};

export default CategoryInput;
