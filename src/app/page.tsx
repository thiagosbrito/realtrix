import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutHome from "@/components/layout/AboutHome";
import FeaturedProperties from "@/components/layout/FeaturedProperties";

export default function Home() {	
	return (
		<>
			<main className="h-screen w-screen bg-slate-900 flex flex-col bg-gradient-to-b from-green-700 to-white transition-colors">
				<Navbar />
				<div className="flex-1 w-full">
					<Hero />
				</div>
			</main>
			<section className="w-full bg-white dark:bg-green-950">
				<div className="container">
					<div className="flex py-20">
						<AboutHome />
					</div>
				</div>
			</section>
			<section className="w-full bg-green-200 py-20">
				<div className="container">
					<div className="w-full space-y-4">
						<h3 className="text-center text-3xl font-bold text-green-950">Based on your location</h3>
						<p className="text-center text-base text-green-800">Some of our picked properties near you location.</p>
					</div>
					<div className="w-full mt-12">
						<FeaturedProperties />
					</div>
				</div>
			</section>
		</>
  	);
}
