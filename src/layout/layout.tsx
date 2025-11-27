import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-white h-screen text-black ">
            <Header />
            {children}
        </div>
    );
}