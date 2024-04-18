"use client"

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/data-table";
import { SizeColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface SizeClientProps{
    data: SizeColumn[]
}

export const SizeClient: React.FC<SizeClientProps> = (
    {data}
) => {
    const router = useRouter(); 
    const params = useParams(); 

    return (
        <>
        <div className="flex items-center justify-between">
            <Heading
                title={`Sizes (${data.length})`}
                description="Manage sizes for your store"
            />
            <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add new
            </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" columns={columns} data={data}/>
        <Heading title = "API" description="API calls for sizes"/>
        <Separator/>
        <ApiList
            entityName="sizes"
            entityIdName="sizeId"
        />
        </>
    )
}