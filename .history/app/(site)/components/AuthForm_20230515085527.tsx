'use client';

import { signIn, useSession } from 'next-auth/react';
import React, { useState } from 'react'

type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>AuthForm</div>
    )
}
