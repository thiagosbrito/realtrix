'use client';

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
    const [darkTheme, setDarkTheme] = useState(true);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

    
    return (    
        <Button variant="ghost" className="hover:bg-transparent active:bg-transparent" size="icon" onClick={() => setDarkTheme(!darkTheme)}>
            <motion.span
				whileHover={{
					rotate: ['180deg','0deg'],
				}}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}

			>
				{darkTheme && (<MoonIcon className="size-6 text-white" />)}
				{!darkTheme && (<SunIcon className="size-6 text-white md:dark:text-black" />)}
			</motion.span>
        </Button>
    )
}
