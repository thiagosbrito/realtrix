import React from 'react'
import { Button } from '@/components/ui/button'
import { HomeIcon, MapPinIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid'
import { ArrowBigDown } from 'lucide-react';

export default function AboutHome() {
    return (
        <div className="w-full grid grid-cols-3 gap-x-16">
            <div className="p-9 w-full border rounded-lg border-primary block h-[500px] bg-[url('/images/home-content-bg.jpg')] bg-cover shadow-2xl shadow-green-950/30 space-y-8">
                <h3 className="text-green-950 text-3xl font-bold">The new way to find your new home</h3>
                <p className="text-base text-green-700 dark:text-muted drop-shadow shadow-green-200">Find your dream place to live in with more than 10k+ properties listed.</p>
                <Button variant="default">Browser Properties</Button>
            </div>
            <div className="w-full flex flex-col gap-y-6">
                <div className="w-full flex flex-1 flex-col gap-y-4">
                    <div className="w-16 h-16 p-1 rounded-full bg-white border border-green-200">
                        <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center">
                            <HomeIcon className="size-7 text-primary" />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold text-green-950 dark:text-green-400">Property Insurance</h4>
                    <p className="text-base text-green-800 dark:text-green-100">We offer our customer property protection of liability coverage and insurance for their better life.</p>
                </div>
                <div className="w-full flex flex-1 flex-col gap-y-4">
                    <div className="w-16 h-16 p-1 rounded-full bg-white border border-green-200">
                        <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center">
                            <ArrowBigDown size={32} className="text-primary" />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold text-green-950 dark:text-green-400">Lowest Comission</h4>
                    <p className="text-base text-green-800 dark:text-green-100">You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-y-6">
                <div className="w-full flex flex-1 flex-col gap-y-4">
                    <div className="w-16 h-16 p-1 rounded-full bg-white border border-green-200">
                        <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center">
                            <ReceiptPercentIcon className="size-7 text-primary" />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold text-green-950 dark:text-green-400">Best Price</h4>
                    <p className="text-base text-green-800 dark:text-green-100">Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
                </div>
                <div className="w-full flex flex-1 flex-col gap-y-4">
                    <div className="w-16 h-16 p-1 rounded-full bg-white border border-green-200">
                        <div className="w-full h-full rounded-full bg-green-200 flex items-center justify-center">
                            <MapPinIcon className="size-7 text-primary" />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold text-green-950 dark:text-green-400">Overall Control</h4>
                    <p className="text-base text-green-800 dark:text-green-100">Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.</p>
                </div>
            </div>
        </div>
    )
}
