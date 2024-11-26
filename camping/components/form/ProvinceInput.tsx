import { Label } from "@/components/ui/label"
import React from "react";
import { provinces } from "@/utils/provinces";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {

    const name = 'province'
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Select
                defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
                name={name}
                required
            >
                <SelectTrigger >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((item) => {
                            return <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                                <span className="capitalize flex items-center gap-4">
                                    {item.PROVINCE_NAME}
                                </span>
                            </SelectItem>
                        })
                    }


                </SelectContent>
            </Select>

        </div>
    )
};

export default ProvinceInput;
