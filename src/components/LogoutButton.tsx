"use client"
import {  signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { Session } from "next-auth";
import { redirect } from "next/navigation";


interface UserMenuButtonProps {
    session: Session | null;
}


export default function Logout({ session }: UserMenuButtonProps) {
    
    return (
        <>
            <Button onClick={() => signOut()}>
                Logout
            </Button>

        </>
    )
}