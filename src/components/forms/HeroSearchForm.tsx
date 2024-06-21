'use client';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from '@/components/ui/calendar';
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const schema = z.object({
    location: z.string().min(3, {
        message: 'Please enter a valid location'
    }),
    dateMoving: z.date().optional(),
});

export default function HeroSearchForm() {


    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            location: '',
            dateMoving: undefined
        }
    });

    const onSubmit = (formValue: z.infer<typeof schema>) => {
        console.log(formValue);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex items-center md:grid md:grid-cols-5 md:divide-x py-3">
                    <div className="mx-auto px-2 col-span-2 w-full">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="space-y-0 h-full w-full flex flex-col justify-center">
                                    <FormLabel className="font-normal text-sm text-muted-foreground" htmlFor="location">Location</FormLabel>
                                    <FormControl className="mt-0">
                                        <Input className="focus-visible:ring-transparent h-7 active:ring-transparent py-0 text-base md:text-xl font-bold px-0 border-none mt-0 placeholder:font-bold" placeholder="Barcelona, Spain" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="hidden md:flex flex-col px-2 col-span-2">
                        <FormField
                            control={form.control}
                            name="dateMoving"
                            render={({ field }) => (
                                <FormItem className="space-y-0 h-full w-full flex flex-col justify-center">
                                    <FormLabel className="font-normal text-sm text-muted-foreground" htmlFor="dateMoving">When</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div
                                                className={cn(
                                                    "w-full flex items-center  justify-between text-left font-bold text-xl focus-visible:ring-transparent active:ring-transparent py-0 border-none mt-0 placeholder:font-bold",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {
                                                    field.value ? (
                                                        format(field.value, 'PPP')
                                                    ) : (
                                                        <span className="font-bold">Select Move-in Date</span>
                                                    )
                                                }
                                                <CalendarIcon className="size-6 text-muted-foreground" />
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar 
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}>
                        </FormField>
                    </div>
                    <div className="flex w-full h-full items-center px-2">
                        <Button className="w-full" variant="default">Search</Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}
