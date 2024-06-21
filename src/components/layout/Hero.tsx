import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import HeroSearchForm from '@/components/forms/HeroSearchForm'
import { HomeModernIcon, UsersIcon } from '@heroicons/react/24/solid'

export default function Hero() {
    return (
        <div className="h-full flex items-center bg-[url('/images/hero.jpg')] dark:bg-[url('/images/hero_night.jpg')] bg-cover bg-bottom transition-all ease-in duration-75">
            <div className="container">
                <div className="my-12 md:my-12 flex flex-col gap-y-6">
                    <div className="content w-full md:w-72 flex flex-col p-4 rounded-xl gap-y-4 bg-[hsl(var(--muted))] backdrop-blur mx-auto md:mx-0 shadow-2xl shadow-black">
                        <h1 className="text-4xl font-extrabold dark:text-white leading-normal tracking-wider">Buy, rent, or sell your property easily</h1>
                        <p className="text-md text-gray=300 dark:text-white tracking-wide">A great platform to buy, sell, or even rent your properties without any commisions.</p>
                    </div>
                    <Tabs defaultValue="rent" className="z-30 w-full">
                        <TabsList className="rounded-b-none justify-start md:justify-center">
                            <TabsTrigger value="rent">Rent</TabsTrigger>
                            <TabsTrigger value="buy">Buy</TabsTrigger>
                            <TabsTrigger value="sell">Sell</TabsTrigger>
                        </TabsList>
                        <TabsContent value="rent" className="mt-0">
                            <div className="w-full md:w-[650px] bg-[hsl(var(--muted))] rounded-md rounded-tl-none px-1 py-2 shadow-2xl shadow-black">
                                <div className="w-full bg-[hsl(var(--background))] p-1 rounded-md shadow-sm shadow-[var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);]">
                                    <HeroSearchForm />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="buy" className="mt-0">
                            <div className="w-full md:w-[650px] bg-[hsl(var(--muted))] rounded-md rounded-tl-none px-1 py-2 shadow-2xl shadow-black">
                                <div className="w-full bg-[hsl(var(--background))] p-1 rounded-md shadow-sm shadow-[var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);]">
                                    <HeroSearchForm />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="sell" className="mt-0">
                            <div className="w-full md:w-[650px] bg-[hsl(var(--muted))] rounded-md rounded-tl-none px-1 py-2 shadow-2xl shadow-black">
                                <div className="w-full bg-[hsl(var(--background))] p-1 rounded-md shadow-sm shadow-[var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);]">
                                    <HeroSearchForm />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                    <div className="w-full md:w-6/12 flex gap-x-6 z-30">
                        <div className="flex flex-1 flex-col gap-y-4">
                            <div className="w-16 h-16 p-1 rounded-full bg-white border border-green-200">
                                <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center">
                                    <UsersIcon className="size-7 text-primary" />
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold text-green-400">50k+ Renters</h4>
                            <p className="text-base text-green-100">believe in out service</p>
                        </div>
                        <div className="flex flex-1 flex-col gap-y-4">
                            <div className="w-16 h-16 p-1 rounded-full bg-white border border-green-200">
                                <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center">
                                    <HomeModernIcon className="size-7 text-primary" />
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold text-green-950 dark:text-green-400">10k+ properties</h4>
                            <p className="text-base text-green-800 dark:text-green-100">and house ready for occupancy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
