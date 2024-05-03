interface LayoutProps {
    children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
    return (
        <main className="flex h-screen">
            {children}
        </main>
    )
}