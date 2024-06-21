'use client';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import NavbarToggle from "./NavbarToggle";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const MenuItems = [
    {
        name: 'Buy',
        href: '/buy'
    },
    {
        name: 'Sell',
        href: '/sell'
    },
    {
        name: 'Rent',
        href: '/rent'
    },
    {
        name: 'Manage Properties',
        href: '/manage-properties'
    },
    {
        name: 'Resources',
        href: '/resources'
    }
]

const sidebarVariants = {
    open: {
        x: 0,
        // height: '100vh',
        transition: {
            duration: 0.5,
            ease: [0.83, 0, 0.17, 1]
        }
    },
    closed: {
        x: '-100%',
        // height: 0,
        transition: {
            duration: 0.5,
            ease: [0.83, 0, 0.17, 1]
        }
    }
}

export default function Navbar() {
    const [isOpen, toggleOpen] = useState(false)

    return (
        <div className="w-full h-24 fixed backdrop-blur fix-blur shadow z-50">
            <div className="container h-full flex items-center justify-between relative">
                <Link href="/" className="w-44 h-12">
                    <Image src="/svgs/Realtrix.svg" alt="Realtrix" width={0} height={0} objectFit="cover" style={{width: '100%', height: 'auto'}} />
                </Link>
                <nav className="hidden md:flex font-poppins items-center mx-auto space-x-9 dark:text-white font-bold drop-shadow-sm">
                    {MenuItems.map((item, index) => (
                        <Link key={index} href={item.href}>{item.name}</Link>  
                    ))}
                </nav>
                <nav className="hidden md:flex font-poppins items-center space-x-4 text-white font-bold drop-shadow-lg">
                    <MagnifyingGlassIcon className="size-6 text-white" />
                    <Button variant="default">Log In</Button>
                    <Button variant="secondary">Sign Up</Button>
                    <ThemeSwitcher />
                </nav>
                <div className="flex items-center gap-x-6 z-30 md:hidden">
                    <Button variant="ghost" className="hover:bg-transparent active:bg-transparent">
                        <MagnifyingGlassIcon className="size-6 text-white" />
                    </Button>
                    <NavbarToggle isOpen={isOpen} onClick={() => {toggleOpen(!isOpen)}} />
                </div>
                <motion.div
                    variants={sidebarVariants}
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className="w-screen h-screen absolute flex md:hidden top-0 left-0 bg-primary dark:bg-secondary transition-colors ease-in-out">
                    <AnimatePresence>
                        <div className="w-full h-full px-8 py-8 flex flex-col text-2xl font-bold gap-y-4">
                            <ThemeSwitcher />
                            {MenuItems.map((item, index) => (
                                <motion.a
                                    className="tracking-wider text-white"
                                    key={index} href={item.href}>
                                        {item.name}
                                </motion.a>  
                            ))}

                            <div className="social-networks mt-auto">
                                <Button variant="ghost">
                                    <FaFacebookF className="size-6 text-white" />
                                </Button>
                                <Button variant="ghost">
                                    <FaInstagram className="size-6 text-white" />
                                </Button>
                                <Button variant="ghost">
                                    <FaXTwitter className="size-6 text-white" />
                                </Button>
                                <Button variant="ghost">
                                    <FaLinkedinIn className="size-6 text-white" />
                                </Button>
                            </div>
                        </div>
                    </AnimatePresence>

                </motion.div>
            </div>
        </div>
    )
}
