'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query';
import { getFeaturedPropertieEnum, getFeaturedProperties } from '@/utils/requests/featuredProperties';
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Bath, BedDouble, Heart, Ruler } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export const dynamic = 'force-static';



export default function FeaturedProperties() {
    const [featFilter, setFeatFilter] = useState('Buy');
    const [enumsType, setEnumsType] = useState<{name: string}[]>([]);

    const fetchFeaturedProperties = useCallback(() => {
        return getFeaturedProperties(featFilter);
    }, [featFilter]);

    const fetchEnums = useCallback(() => {
        return getFeaturedPropertieEnum();
    }, [])

    const { data, isLoading, isError, isSuccess, error, refetch } = useQuery({
        queryKey: ['featuredProperties'],
        queryFn: () => fetchFeaturedProperties()
    });

    const { data: enumsData } = useQuery({
        queryKey: ['featuredPropertiesEnums'],
        queryFn: () => fetchEnums()
    });

    useEffect(() => {
        if (featFilter) {
            refetch();
        }
    }, [featFilter, refetch]);

    const changeFeatureFilter = (marketType: string) => {
        setFeatFilter(marketType);
    };

    const _runQuery = useCallback(() => {
        return { data, isLoading, isError, isSuccess, error };
    }, [data, isLoading, isError, isSuccess, error]);

    const _runEnumsQuery = useCallback(() => {
        return { enumsData }
    }, [enumsData])

    useEffect(() => {
        const results = _runQuery();
        const enums = _runEnumsQuery();
        console.log(results.data?.errors?.[0]?.message);
        setEnumsType(enums.enumsData?.data?.__type?.enumValues);
    }, [_runQuery, data, _runEnumsQuery, enumsData]);

    return (
        <div className="space-y-8">
            <div className="flex justify-between">
                <Tabs defaultValue='Buy' onValueChange={(e) => changeFeatureFilter(e)}>
                    <TabsList className='space-x-4'>
                        {enumsType && enumsType.map((enumItem, index) => (
                            <TabsTrigger key={index} value={enumItem.name}>{enumItem.name}</TabsTrigger>
                        ))}
                        {/* {enumsType?.map((enum, index) => (
                            <TabsTrigger key={index} value={marketTypeEnums.getValue('Rent')?.value}>Rent</TabsTrigger>
                        ))}
                         */}
                    </TabsList>
                            
                    {enumsType && enumsType.map((enumItem, index) => (
                        <TabsContent key={index} value={enumItem.name} className='p-0 py-4'>
                            <div className="grid grid-cols-3 gap-4">
                                {isLoading && <div>Loading...</div>}
                                {isError && <div className='w-full text-red-900 font-bold'>{error.message}</div>}
                                {isSuccess && data?.data?.realEstateProperties.map((property: any, index: number) => (
                                    <Card key={index} className='overflow-hidden'>
                                        <CardHeader className='p-0 overflow-hidden'>
                                            <Image alt={property.title} src={property.images[0].url} placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC0CAYAAABll8ICAAAAAXNSR0IArs4c6QAABQNJREFUeF7t1LsJAlEURdEnaCIGYmILtmJ7FjmxRn5hRDvY6bAmnhu8xWGvzvNlHj4CBAgEgZVwBC2/EiDwFxAOQyBAIAsIRyZzQICAcNgAAQJZQDgymQMCBITDBggQyALCkckcECAgHDZAgEAWEI5M5oAAAeGwAQIEsoBwZDIHBAgIhw0QIJAFhCOTOSBAQDhsgACBLCAcmcwBAQLCYQMECGQB4chkDggQEA4bIEAgCwhHJnNAgIBw2AABAllAODKZAwIEhMMGCBDIAsKRyRwQICAcNkCAQBYQjkzmgAAB4bABAgSygHBkMgcECAiHDRAgkAWEI5M5IEBAOGyAAIEsIByZzAEBAsJhAwQIZAHhyGQOCBAQDhsgQCALCEcmc0CAgHDYAAECWUA4MpkDAgSEwwYIEMgCwpHJHBAgIBw2QIBAFhCOTOaAAAHhsAECBLKAcGQyBwQICIcNECCQBYQjkzkgQEA4bIAAgSwgHJnMAQECwmEDBAhkAeHIZA4IEBAOGyBAIAsIRyZzQICAcNgAAQJZQDgymQMCBITDBggQyALCkckcECAgHDZAgEAWEI5M5oAAAeGwAQIEsoBwZDIHBAgIhw0QIJAFhCOTOSBAQDhsgACBLCAcmcwBAQLCYQMECGQB4chkDggQEA4bIEAgCwhHJnNAgIBw2AABAllAODKZAwIEhMMGCBDIAsKRyRwQICAcNkCAQBYQjkzmgAAB4bABAgSygHBkMgcECAiHDRAgkAWEI5M5IEBAOGyAAIEsIByZzAEBAsJhAwQIZAHhyGQOCBAQDhsgQCALCEcmc0CAgHDYAAECWUA4MpkDAgSEwwYIEMgCwpHJHBAgIBw2QIBAFhCOTLbsg/f1Pp7Tbcyvz1jvt+Mx3cbudBybw3bZD/e6JCAcicvPBAj8BITDDggQyALCkckcECAgHDZAgEAWEI5M5oAAAeGwAQIEsoBwZDIHBAgIhw0QIJAFhCOTOSBAQDhsgACBLCAcmcwBAQLCYQMECGQB4chkDggQEA4bIEAgCwhHJnNAgIBw2AABAllAODKZAwIEhMMGCBDIAsKRyRwQICAcNkCAQBYQjkzmgAAB4bABAgSygHBkMgcECAiHDRAgkAWEI5M5IEBAOGyAAIEsIByZzAEBAsJhAwQIZAHhyGQOCBAQDhsgQCALCEcmc0CAgHDYAAECWUA4MpkDAgSEwwYIEMgCwpHJHBAgIBw2QIBAFhCOTOaAAAHhsAECBLKAcGQyBwQICIcNECCQBYQjkzkgQEA4bIAAgSwgHJnMAQECwmEDBAhkAeHIZA4IEBAOGyBAIAsIRyZzQICAcNgAAQJZQDgymQMCBITDBggQyALCkckcECAgHDZAgEAWEI5M5oAAAeGwAQIEsoBwZDIHBAgIhw0QIJAFhCOTOSBAQDhsgACBLCAcmcwBAQLCYQMECGQB4chkDggQEA4bIEAgCwhHJnNAgIBw2AABAllAODKZAwIEhMMGCBDIAsKRyRwQICAcNkCAQBYQjkzmgAAB4bABAgSygHBkMgcECAiHDRAgkAWEI5M5IEBAOGyAAIEsIByZzAEBAsJhAwQIZAHhyGQOCBAQDhsgQCALCEcmc0CAgHDYAAECWUA4MpkDAgSEwwYIEMgCwpHJHBAgIBw2QIBAFhCOTOaAAAHhsAECBLKAcGQyBwQICIcNECCQBYQjkzkgQEA4bIAAgSzwBeSFDWdklLiKAAAAAElFTkSuQmCC' width={300} height={200} />
                                        </CardHeader>
                                        <CardContent className='px-4 py-6 flex flex-col divide-y gap-y-4'>
                                            <div className="w-full flex">
                                                <div className='flex-1 flex flex-col gap-y-2'>
                                                    <p className='font-bold'>{Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(property.price)}<span className='font-normal'>/month</span></p>
                                                    <p>{property.city}</p>
                                                    <p className='text-xs'>{property.address} - {property.city} - {property.country}</p>
                                                </div>
                                                <div>
                                                    <div className="size-8 rounded-full border border-primary flex items-center justify-center">
                                                        <Heart className='size-4 text-primary' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between py-4'>
                                                <span className='text-xs flex items-center gap-x-2'>
                                                    <BedDouble className='size-4' />
                                                    {property.bedrooms} bdrm
                                                </span>
                                                <span className='text-xs flex items-center gap-x-2'>
                                                    <Bath className='size-4' />
                                                    {property.bathrooms} WC
                                                </span>
                                                <span className='text-xs flex items-center gap-x-2'>
                                                    <Ruler className='size-4' />
                                                    {property.squareFootage} sqft
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
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
