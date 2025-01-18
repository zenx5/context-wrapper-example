import BarNav from "./components/BarNav";
import CodeExample from "./components/CodeExample";

export default function Page() {

    return <main>
        <BarNav title="Con Context Wrapper"/>
        <section className="px-4">
            <h1 className="text-2xl my-1 text-slate-600">Title 1</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus consectetur obcaecati, amet minima at blanditiis voluptatem officia molestiae et inventore libero nam sit illo assumenda distinctio excepturi laboriosam nostrum!</p>
            <h2 className="text-2xl mt-5 mb-1 text-slate-600">Title 2</h2>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus consectetur obcaecati, amet minima at blanditiis voluptatem officia molestiae et inventore libero nam sit illo assumenda distinctio excepturi laboriosam nostrum!</p>
        </section>
        <CodeExample />
    </main>
}