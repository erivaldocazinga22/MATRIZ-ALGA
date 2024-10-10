import { useEffect } from "react";
import { OrderMatriz } from "../components/Order";
import { SelectMatriz } from "../components/Select";
import { useChatWithGemini } from "../hooks/gemini-ai";
import { DEFINE_MATRIZ } from "../static";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: chatWithGeminiData, mutateAsync: chatWithGeminiFn, isPending } = useChatWithGemini();

    useEffect(() => {
        chatWithGeminiFn(searchParams.get("type")??"matriz-quadrada");
    }, [chatWithGeminiFn, searchParams.get("type")])
    

    const data: React.ReactNode | string = chatWithGeminiData
        ? DEFINE_MATRIZ.find(item => 
            chatWithGeminiData.toLowerCase().includes(item.name.toLowerCase())
        )?.definition || "Nenhuma matriz selecionada."
        : "Nenhuma matriz selecionada.";
    
    return (
        <div className="container mx-auto">
            <header className="h-20 sm:px-4 md:p-0  flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl font-bold">Matriz - ALGA</h1>
                <div>
                    <SelectMatriz onChange={({ selectedValue }) => {
                        chatWithGeminiFn(selectedValue);
                    }} />
                    <OrderMatriz />
                </div>
            </header>

            <div>
                {isPending 
                    ? <span className="text-sm text-neutral-500">Carregando...</span>
                    : data && (
                        (typeof data) === "string" ? (
                            <div>
                                <p className="text-sm text-neutral-500">{data}</p>
                            </div>
                        ) : (
                            <section className="divide-y divide-neutral-700">
                                <div className="pb-6">
                                    <h1 className="text-2xl font-bold mb-2">{chatWithGeminiData}</h1>
                                    <p className="text-neutral-400">{data}</p>
                                </div>
                                {}
                                <form action="" className="px-4 md:px-0 space-y-4">
                                    {Array.from({ length: chatWithGeminiData?.toLowerCase()?.includes("nula") ? 2 : 1}).map((_, idx, array) => {
                                        const type = array.length === 1 ? "Linhas e Colunas" : idx === 0 ? "Linhas" : "Colunas";
                                        const values = `num${type.split(" ").join("")}`;
                                        const valuesParams = array.length === 1 ? ["m"] : ["m","n"]
                                        return (
                                            <div key={values + idx} className="flex flex-col w-full md:w-[200px]">
                                                <label htmlFor={values} className="text-sm text-neutral-500 mb-2">Número de {type}:</label>
                                                <input type="number" id={values} min="1" required 
                                                    className="px-4 py-1.5 rounded-md" defaultValue={searchParams.get(valuesParams[idx])??""} onChange={({ target }) => setSearchParams(params => {
                                                        params.set(valuesParams[idx], target.value);
                                                        return params;
                                                    })}
                                                />
                                            </div>
                                        )
                                    })}
                                </form>
                            </section>
                        )   
                    )}
            </div>
        </div>
    );
}
