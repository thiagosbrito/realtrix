import { MotionConfig, motion } from 'framer-motion';

export default function NavbarToggle({ isOpen, onClick}: { isOpen: boolean, onClick: () => void } ) {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1]
            }}
        >
            <motion.button
                onClick={onClick}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="md:hidden relative w-10 h-10 rounded-md"
            >
                <motion.span
                    style={{
                        left: "50%",
                        top: "35%",
                        x: "-50%",
                        y: "-50%",
                    }} 
                    className="absolute h-[3px] w-6 rounded-xl bg-white"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            top: ["35%", "50%", "50%"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            top: ["50%", "35%", "35%"],
                        }
                    }}    
                />
                <motion.span
                    style={{
                        left: "50%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%",
                    }} 
                    className="absolute h-[3px] w-6 rounded-xl bg-white"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "-45deg"],
                        },
                        closed: {
                            rotate: ["-45deg", "0deg", "0deg"],
                        }
                    }}
                />
                <motion.span
                    style={{
                        left: "calc(50% + 6px)",
                        bottom: "35%",
                        x: "-50%",
                        y: "50%",
                    }} 
                    className="absolute h-[3px] w-3 rounded-xl bg-white"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            left: "50%",
                            bottom: ["35%", "50%", "50%"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            left: "calc(50% + 6px)",
                            bottom: ["50%", "35%", "35%"],
                        }
                    }}
                />
            </motion.button>
        </MotionConfig>
    )
}
