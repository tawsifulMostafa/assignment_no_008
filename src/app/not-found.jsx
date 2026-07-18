"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { BookOpen } from "@gravity-ui/icons";
import { animated, useSpring } from "@react-spring/web";

const NotFound = () => {
    const cardAnimation = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(40px) scale(0.96)",
        },
        to: {
            opacity: 1,
            transform: "translateY(0px) scale(1)",
        },
        config: {
            tension: 180,
            friction: 18,
        },
    });

    const floatingBook = useSpring({
        from: {
            transform: "translateY(-6px)",
        },
        to: {
            transform: "translateY(6px)",
        },
        loop: {
            reverse: true,
        },
        config: {
            duration: 1800,
        },
    });

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-green-50 via-white to-emerald-100 px-5">

            {/* Background Blur */}
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

            <animated.div
                style={cardAnimation}
                className="relative z-10 w-full max-w-xl rounded-3xl border border-white/70 bg-white/80 p-10 text-center shadow-2xl backdrop-blur"
            >
                <animated.div
                    style={floatingBook}
                    className="mb-5 flex justify-center"
                >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-md">
                        <BookOpen width={40} height={40} />
                    </div>
                </animated.div>

                <h1 className="text-7xl font-black text-green-600">404</h1>

                <h2 className="mt-3 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-500 leading-7">
                    Looks like this page has been borrowed from our library or no
                    longer exists.Let's help you find your way back.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/">
                        <Button
                            color="success"
                            className="rounded-xl px-6 font-semibold">
                            Back to Home
                        </Button>
                    </Link>


                    <Link href="/books">
                        <Button
                            variant="bordered"
                            className="rounded-xl px-6"
                        >
                            Explore Books
                        </Button>

                    </Link>

                </div>
            </animated.div>
        </div>
    );
};

export default NotFound;