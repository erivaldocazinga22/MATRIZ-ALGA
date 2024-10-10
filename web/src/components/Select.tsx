import { useSearchParams } from "react-router-dom";
import { MATRIZLIST } from "../static";
import { useCallback } from "react";

type SelectMatrizProps = {
    onChange: (event: { selectedValue: string }) => void;
}

export const SelectMatriz = ({ onChange }: SelectMatrizProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const formatText = useCallback((text: string): string => {
        return text.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")
            .join("-")
            .toLowerCase();
    },[]);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const text = formatText(event.target.value);

        setSearchParams((params) => {
            params.set("type", text);
            return params;
        });

        onChange({ selectedValue: text });
    };

    return (
        <select onChange={handleSelect} defaultValue={searchParams.get("type")??""} 
        className="p-2 rounded-md bg-neutral-500">
            {MATRIZLIST.map((matriz) => (
                <option key={matriz} value={formatText(matriz)} >
                    {matriz}
                </option>
            ))}
        </select>
    );
};
