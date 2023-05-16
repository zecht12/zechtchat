import React from 'react'

export const Sidebar = ({children}: {children : React.ReactNode;}) => {
    return (
        <div className='h-full'>
            {children}
        </div>
    )
}
