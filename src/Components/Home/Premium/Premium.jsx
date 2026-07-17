import Link from "next/link";
import { CheckCircle, Crown, BookOpen, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Premium = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 max-w-6xl mx-auto'>

    
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image
                    className='rounded-3xl object-contain'
                    alt='book Background'
                    width={500}
                    height={400}
                    src="/asset/why-us.png"
                />
            </div>

            
            <div className='w-full lg:w-1/2 flex justify-center'>

                <div className='relative w-full h-80'>

                    <Image
                        alt='Book Image'
                        src="/asset/premiumSub.png"
                        fill
                        className='object-cover rounded-2xl'
                    />

                    {/* Overlay text */}
                    <div className='absolute inset-0 flex flex-col justify-center px-6 py-4 rounded-2xl bg-black/30'>
                        <div className='flex items-center gap-2 mb-1'>
                            <Crown size={20} className='text-yellow-400' />
                            <h2 className='text-white text-xl font-bold leading-snug'>
                                Become a Member
                            </h2>
                        </div>
                        <p className='text-white/90 text-xs mt-1 mb-4'>
                            Unlock exclusive benefits and<br />borrow more books.
                        </p>

                        <ul className='space-y-2 mb-5'>
                            <li className='flex items-center gap-2 text-white text-sm'>
                                <Clock size={15} className='text-blue-300 shrink-0' />
                                Priority borrowing
                            </li>
                            <li className='flex items-center gap-2 text-white text-sm'>
                                <Tag size={15} className='text-pink-300 shrink-0' />
                                Special discounts
                            </li>
                            <li className='flex items-center gap-2 text-white text-sm'>
                                <BookOpen size={15} className='text-orange-300 shrink-0' />
                                Early access to new books
                            </li>
                        </ul>

                        <Link href='/' className='self-start flex items-center gap-2 bg-white text-purple-700 font-semibold text-xs px-4 py-2 rounded-full hover:bg-purple-100 transition'>
                            <CheckCircle size={14} className='text-purple-500' />
                            Join Now 
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Premium;