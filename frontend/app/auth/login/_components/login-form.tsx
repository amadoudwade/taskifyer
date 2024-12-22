"use client"

import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import { login } from '@/actions/user';
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [state, formAction] = useFormState(login, undefined)

    console.log(state?.errors);

  return (
    <div className={cn("flex flex-col gap-6 items-center p-20", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-6 md:grid-cols-2">
          <form action={formAction} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Taskifyer</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Taskifyer account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name='email'
                  type="email"
                  placeholder="test@taskifyer.com"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                {
                state?.errors?.email && (<span className='text-red-400'>{state.errors.email}</span>)
            }
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password"
                 name='password'
                 type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)} />
                {
                state?.errors?.password && (<span className='text-red-400'>{state.errors.password}</span>)
            }
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src=""
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
