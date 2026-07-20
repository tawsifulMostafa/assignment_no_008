"use client"

import { Button } from "@heroui/react";
import Link from "next/link";
import { toast } from "sonner";

const BorrowThisBook = () => {
    return (
        <div>
            <Link href={"/"}>

                <Button onClick={() => {
                    toast.success("You have borrowed this book")
                }}>Borrow This Book</Button></Link>
        </div>
    );
};

export default BorrowThisBook;