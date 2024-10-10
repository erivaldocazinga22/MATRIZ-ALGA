import { useSearchParams } from "react-router-dom";

export const OrderMatriz = () => {
    const [searchParams] = useSearchParams();
    return (
        <div className="text-sm text-neutral-500">
            Matriz de Ordem: <span className="font-bold text-neutral-400">
                {searchParams.get("type")?.toLowerCase()?.includes("nula") ? <span>m<small className="font-medium text-neutral-500">x</small>n</span> : "n"}
            </span>
        </div>
    )
}
