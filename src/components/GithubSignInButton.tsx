"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      
    </Button>
  );
}