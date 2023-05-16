'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useState } from 'react'

type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/conversations')
        }
    }, [session?.status, router]);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

        const {
            register,
            handleSubmit,
            formState: {
            errors,
            }
        } = useForm<FieldValues>({
            defaultValues: {
            name: '',
            email: '',
            password: ''
            }
        });
        
        const onSubmit: SubmitHandler<FieldValues> = (data) => {
            setIsLoading(true);
        
            if (variant === 'REGISTER') {
            axios.post('/api/register', data)
            .then(() => signIn('credentials', {
                ...data,
                redirect: false,
            }))
            .then((callback) => {
                if (callback?.error) {
                toast.error('Invalid credentials!');
                }
        
                if (callback?.ok) {
                router.push('/conversations')
                }
            })
            .catch(() => toast.error('Something went wrong!'))
            .finally(() => setIsLoading(false))
            }
        
            if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
            .then((callback) => {
                if (callback?.error) {
                toast.error('Invalid credentials!');
                }
        
                if (callback?.ok) {
                router.push('/conversations')
                }
            })
            .finally(() => setIsLoading(false))
            }
        }
        
        const socialAction = (action: string) => {
            setIsLoading(true);
        
            signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                toast.error('Invalid credentials!');
                }
        
                if (callback?.ok) {
                router.push('/conversations')
                }
            })
            .finally(() => setIsLoading(false));
        }

    return (
        <div>AuthForm</div>
    )
}
