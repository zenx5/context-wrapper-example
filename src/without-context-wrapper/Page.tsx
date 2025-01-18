import BarNav from "./components/BarNav";
import CodeExample from "./components/CodeExample";

export default function Page() {

    return <main>
        <BarNav title="Sin Context Wrapper"/>
        <section className="px-4">
            <h1 className="text-3xl my-1 text-slate-600 font-semibold">Invasión del Contexto</h1>
            <p className="text-slate-500">Un componente ha sido <span className="italic font-semibold">invadido por el contexto</span> cuando la lógica del contexto se encuentra dentro del componente, evitando de esta manera que pueda ser reutilizado sin antes realizar una de dos acciones o una combinación de ambas</p>
            <ul className="text-slate-500 mt-2 w-10/12 mx-auto list-disc">
                <li className="italic my-1">Modifcar el componente para vincularlo al contexto de la aplicación que le recibe</li>
                <li className="italic my-1">Modifcar el componente para remover cualquier lógica de contexto y establecer props para recibir los datos</li>
                <li className="italic my-1">Modificar el contexto de la aplicación que recibe el componente para adaptarlo a los requerimentos del componente</li>
            </ul>
            <p className="text-slate-500">A continuación, vemos el componente Avatar de esta aplicación y como este ha sido <span className="italic font-semibold">invadido por el contexto</span> para obtener los datos del usuario.</p>
        </section>
        <CodeExample />
        <section className="px-4">
            <h1 className="text-3xl my-1 text-slate-600 font-semibold">Context Wrapper como punto medio</h1>
            <p className="text-slate-500">Esta estrategia propone usar lo mejor de ambas formas de trabajo, el <span className="font-semibold italic">Context</span> para que los datos esten disponible en cualquier nivel de la aplicación y los <span className="font-semibold italic">props</span> para que los componentes accedan a los datos que requieran.</p>
            <ul className="text-slate-500 mt-2 w-10/12 mx-auto list-decimal">
                <li className="italic my-1">Agragamos el contexto con los datos que se necesitan.</li>
                <li className="italic my-1">Creamos <span className="font-semibold italic">Componentes Middleware</span> que implemente el <span className="italic font-semibold">useContext</span>.</li>
                <li className="italic my-1">Invocamos nuestro Componente Final dentro del Componente Middleware y pasamos los datos del contexto por <span className="italic font-semibold">props</span>.</li>
            </ul>
        </section>
    </main>
}