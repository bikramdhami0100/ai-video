import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
function Duration({ onUserSelect }: any) {
    return (
        <div className=' cursor-pointer w-[96%] m-auto'>
            <Select onValueChange={(value: any) => {
                onUserSelect("duration", value)
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="30 Seconds">30 seconds</SelectItem>
                    <SelectItem value="60 Seconds">60 seconds</SelectItem>
                    <SelectItem value="120 Seconds">2 minutes</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Duration