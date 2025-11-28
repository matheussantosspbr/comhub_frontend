import Link from "next/link";

export default function Header() {
    return (
        <header className="px-2 py-8 sm:p-10 md:px-20 mb-10  w-full bg-white font-bold text-xl h-16 flex justify-between">
            <h1>COMHUB<code className="text-blue-600">encurta</code></h1>
            <nav className="flex gap-4 text-black">
                <ul className="flex gap-2 md:gap-4 font-normal text-lg">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/docs">Documentação</Link></li>
                </ul>
            </nav>
        </header>
    );
}