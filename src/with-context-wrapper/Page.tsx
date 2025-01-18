import BarNav from "./components/BarNav";
import CodeExample from "./components/CodeExample";

export default function Page() {

    return <main>
        <BarNav title="Con Context Wrapper"/>
        <section className="px-4">
            <h1 className="text-3xl my-1 text-slate-600 font-semibold">Los Componentes</h1>
            <p className="text-slate-500">Los componentes son <span className="italic font-semibold">piezas de UI reutilizables</span>, por lo que deberíamos poder implementarlas en diferentes lugares con menor inversión de lo que lleva desarrollarlos.</p>
            <CodeExample />
            <h1 className="text-3xl my-1 text-slate-600 font-semibold">Props</h1>
            <p className="text-slate-500">La forma como normalmente un componente recibe datos del exterior es a través de sus props, y hasta aquí todo esta bien si hablamos de una aplicación pequeña donde los componentes estan relativamente cerca, pero...</p>
            <p className="text-slate-500">A medida que una aplicación crece la distancia entre componentes aumenta, creando muchos niveles de componentes y aparece un fenemoeno que llamamos <span className="font-semibold italic text-red-400">Props Drilling</span>.</p>
            <h1 className="text-3xl my-1 text-slate-600 font-semibold">Props Drilling</h1>
            <p className="text-slate-500">Este es el paso de props de un componente a otro usando como intermediario otros componentes que en muchas ocasiones ni usan el dato en cuestion, solo son itermediarios.</p>
            <h1 className="text-3xl my-1 text-slate-600 font-semibold">El Contexto</h1>
            <p className="text-slate-500">El contexto es una forma de compartir datos dentro de una aplicación de React sin tener que incurrir en el <span className="font-semibold italic">props drilling</span>. Es un "truco de rayos x" que puede proveer datos a un componente nieto sin tener sin pasar por los hijos.</p>
            <p className="text-slate-500">Sin embargo, como todo buen principio, si no es implementado correctamente, puede generar problemas. Uno los problemas que he encontrado es la <span className="italic font-semibold text-red-400">Invasión del contexto</span> que definimos más abajo y que genera conflictos con el <span className="italic">principio de reutilización</span> de los componentes.</p>
        </section>
        
    </main>
}