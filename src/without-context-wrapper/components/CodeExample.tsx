export default function CodeExample() {
    
    return <code className="flex flex-col mx-8 p-4 bg-slate-300 mt-4 gap-1">
        <span>
            <span className="text-indigo-400 font-semibold">import</span>
            <span className="pl-2 text-blue-700">{'{'}</span>
            <span className="pl-2 text-blue-300">useUserContext</span>
            <span className="pl-2 text-blue-700">{'}'}</span>
            <span className="pl-2 font-semibold text-indigo-400">from</span>
            <span className="pl-2 text-red-400">"../UserContext"</span>
        </span>
        <span className="my-1"/>
        <span />
        <span>
            <span className="text-indigo-400 font-semibold">export default</span>
            <span className="pl-2 text-blue-700">function</span>
            <span className="pl-2 text-yellow-600">Avatar</span>
            <span className="text-blue-700">(){'{'}</span>
        </span>
        <span>
            <span className="pl-4 text-blue-700">const</span>
            <span className="pl-1 text-blue-300">{'{'} username, avatarUrl {'}'}</span>
            <span className="pl-1">=</span>
            <span className="pl-1 text-yellow-600">useUserContext</span>
            <span className="text-green-600">()</span>
        </span>
        <span className="my-1"/>
        <span>
            <span className="pl-4 text-indigo-400">return</span>
            <span className="pl-1 text-red-400">{'<'}span </span>
            <span className="text-red-700">className</span>
            <span className="text-red-400">="flex flex-col items-center"{'>'}</span>
        </span>
        <span>
            <span className="pl-10 text-red-400">{'<'}img </span>
            <span className="text-red-700">src</span>
            <span className="text-red-400">=</span>
            <span className="text-blue-300">{'{'}avatarUrl{'}'}</span>
            <span className="pl-1 text-red-700">className</span>
            <span className="text-red-400">="rounded-full block w-10 h-10"{'/>'}</span>
        </span>
        <span>
            <span className="pl-4 text-red-400">{'<'}small </span>
            <span className="pl-1 text-red-700">className</span>
            <span className="text-red-400">="text-lg first-letter:uppercase"{'>'}</span>
            <span className="text-blue-300">{'{'}avatarUrl{'}'}</span>
            <span className="text-red-400">{'</'}small{'>'}</span>
        </span>
        <span>
            <span className="text-blue-700">{'}'}</span>
        </span>
    </code>
}