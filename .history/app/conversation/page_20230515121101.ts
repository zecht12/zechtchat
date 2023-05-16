'use client';

import clsx from "clsx";


const Home = () => {
    const { isOpen } = useConversation();

    return (
        <div className={clsx(
        'lg:pl-80 h-full lg:block', 
        isOpen ? 'block' : 'hidden'
        )}>
        </div>
    )
}

export default Home;