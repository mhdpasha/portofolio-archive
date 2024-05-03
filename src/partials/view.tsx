interface ViewProps {
    children: React.ReactNode
}

export default function View ({ children }: ViewProps) {
    return (
        <main className="flex-1 bg-gray-900 flex justify-center items-center">
            {children}
        </main>
    )
}