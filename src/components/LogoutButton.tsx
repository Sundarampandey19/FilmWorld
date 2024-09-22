"use client"
import {  signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { Session } from "next-auth";




export default function Logout() {
    
    return (
        <>
            <Button onClick={() => signOut()}>
                Logout
            </Button>

        </>
    )
}