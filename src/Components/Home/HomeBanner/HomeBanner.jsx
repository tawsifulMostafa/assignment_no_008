import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Flame, Star } from '@gravity-ui/icons';


const HomeBanner = () => {
    return (
        <div>

            <section className="container mx-auto my-8">
                <div className="hero relative h-112.5 rounded-3xl overflow-hidden">
                    <Image
                        src="/asset/banner.png"
                        alt="Banner"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="hero-overlay bg-black/30"></div>

                    <div className="hero-content text-left text-black justify-start w-full">
                        <div className="max-w-lg">
                            <h1 className="text-5xl font-bold">
                                Find Your Next Read
                            </h1>

                            <p className="py-6">
                                Discover captivating stories, timeless classics, and new favorites.
                            </p>

                            <Link href={'/books'}> <Button size="lg">Browse Now</Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="lg:md:flex grid lg:md:px-4 gap-2 backdrop-blur-2xl">
                <Button className="text-orange-400 bg-white border border-gray-300">New Books <Flame></Flame> </Button>
                <Marquee pauseOnHover className="text-green-400">
                    <span className="p-6 text-blue-400">Atomic Habits </span>
                    <span className="p-6 text-yellow-400">Clean Code</span>
                    <span className="p-6 text-red-400">The Alchemists</span>
                    <span className="p-6 text-green-400">Introduction to Algorithms</span>
                </Marquee>

                <Button className="bg-white border border-gray-300  text-black">Special <Star></Star> <span className="text-green-500 font-bold">discount</span> for membership</Button>
            </div>


        </div>
    );
};

export default HomeBanner;