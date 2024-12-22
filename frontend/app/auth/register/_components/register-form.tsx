"use client"

import React from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail } from "lucide-react";
import { motion } from "framer-motion";
// @ts-ignore
import { useFormState } from "react-dom"
import { span } from 'framer-motion/client';
import { register } from '@/actions/user';

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

    const [first_name, setFirstName] = useState<string>('')
    const [last_name, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [telephone, setTelephone] = useState<string>('')
    const [state, formAction] = useFormState(register, undefined)

    console.log(state?.errors);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
    <motion.div 
    initial={{ opacity:0, y: -20}}
    animate={{ opacity:1, y: 0}}
    transition={{ duration:0.5}}
    className="w-full max-w-md"
    >
      <div className="bg-w rounded-2xl shadow-xl p-8 space-y-6">
       <div className="text-center space-y-2">
        <h1 className="text-3xl">Let's create an account !</h1>
        <p className="text-muted-foreground"></p>
        </div>
        <form action={formAction} className="space-y-4"
          >
          <div className="space-y-2">
            <label htmlFor="first_name">First name</label>
            <Input id="first_name"
            name='first_name'
            type="first_name"
            placeholder="First name"
            value={first_name}
            onChange={(e)=> setFirstName(e.target.value)}
            />
            {
                state?.errors?.email && (<span className='text-red-400'>{state.errors.first_name}</span>)
            }
          </div>
          <div className="space-y-2">
            <label htmlFor="last_name">Last name</label>
            <Input id="last_name"
            name='last_name'
            type="last_name"
            placeholder="Last name"
            value={last_name}
            onChange={(e)=> setLastName(e.target.value)}
            />
            {
                state?.errors?.email && (<span className='text-red-400'>{state.errors.last_name}</span>)
            }
          </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                 <Input id="email"
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
          <div className="space-y-2">
          <label htmlFor="password">Telephone</label>
          <div className="relative">
          <Input id="telephone"
          name='telephone'
          type='telephone'
          placeholder="Telephone"
            value={telephone}
            onChange={(e)=> setTelephone(e.target.value)}
            />

            {
                state?.errors?.password && (<span className='text-red-400'>{state.errors.telephone}</span>)
            }
            </div>
            <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <div className="relative">
          <Input id="password"
          name='password'
          type='password'
          placeholder="********"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />

            {
                state?.errors?.password && (<span className='text-red-400'>{state.errors.password}</span>)
            }
            </div>
           {/* <button type="button"
           onClick={()=> setShowPassword(! showPassword)}
           className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20}/> }
            </button>    */}
            
          </div>
          </div>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span></span>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  )
}
