
export default async function ConversationsLayout({
    children
    }: {
    children: React.ReactNode,
    }) {

    return (
        // @ts-expect-error Server Component
        <Sidebar>
        <div className="h-full">
            <ConversationList 
            users={users} 
            title="Messages" 
            initialItems={conversations}
            />
            {children}
        </div>
        </Sidebar>
    );
}