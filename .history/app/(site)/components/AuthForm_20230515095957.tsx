'use client';

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "react-hot-toast";
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';

type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

        const {register,handleSubmit,formState: {errors,}} = useForm<FieldValues>({
            defaultValues: {
                name: '',
                email: '',
                password: ''
            }
        });
    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input id='name' label='Name' register={register} errors={errors} />
                    )}
                    <Input id='email' label='Email Address' register={register} errors={errors} />
                    <Input id='password' label='Password' register={register} errors={errors} />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
