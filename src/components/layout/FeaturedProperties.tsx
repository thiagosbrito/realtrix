import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input } from '../ui/input'

export default function FeaturedProperties() {
    return (
        <div className="space-y-3">
            <div className="flex justify-between">
                <Tabs>
                    <TabsList className='space-x-4'>
                        <TabsTrigger value="rent">Rent</TabsTrigger>
                        <TabsTrigger value="buy">Buy</TabsTrigger>
                        <TabsTrigger value="sell">Sell</TabsTrigger>
                    </TabsList>
                    <TabsContent value="rent"></TabsContent>
                    <TabsContent value="buy"></TabsContent>
                    <TabsContent value="sell"></TabsContent>
                </Tabs>

                <div className="w-4/12">
                    <div className="w-full border border-primary rounded-md bg-green-400 px-2 flex gap-x-3 items-center">
                        <MagnifyingGlassIcon className='size-6 text-primary' />
                        <Input placeholder='Search...' className='
                            bg-transparent border-none
                            ring-offset-transparent
                            placeholder:font-bold
                            placeholder:text-primary
                            placeholder:text-lg
                          text-green-800 text-lg
                            font-bold focus:ring-transparent
                            focus-visible:ring-transparent
                            active:ring-transparent
                        ' />
                    </div>
                </div>
            </div>
        </div>
    )
}
