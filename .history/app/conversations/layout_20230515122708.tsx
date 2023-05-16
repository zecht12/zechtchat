
export default async function ConversationsLayout({
    children
    }: {
    children: React.ReactNode,
    }) {
    const conversations = await getConversations();
    const users = await getUsers();

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