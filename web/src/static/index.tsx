import { ReactNode } from "react";

export const MATRIZLIST: string[] = [
    "Matriz Quadrada",
    "Matriz Nula",
    "Matriz Diagonal",
    "Matriz Identidade",
    "Matriz Triangular Suberior",
    "Matriz Triangular Inferior",
    "Matriz Transposta",
    "Matriz Simétrica",
    "Matriz Anti-Simétrica",
    "Matriz Potência",
    "Matriz Periodica",
]

export type MATRIZ_TYPE = 
    "Matriz Quadrada" | "Matriz Nula" |
    "Matriz Diagonal" |
    "Matriz Identidade" |
    "Matriz Triangular Suberior" |
    "Matriz Triangular Inferior" |
    "Matriz Transposta" | "Matriz Simétrica" |
    "Matriz Anti-Simétrica"| "Matriz Potência"| "Matriz Periodica" ;

    type IDefineMatriz = {
        name: MATRIZ_TYPE;
        definition: ReactNode | string
    }
    
    export const DEFINE_MATRIZ: IDefineMatriz[] = [
        {
            name: "Matriz Quadrada",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Nula",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se todos os coeficientes de A forem iguais a zero, então diz-se que A é uma matriz nula de ordem mxn representa-se por 0<sub>mxn</sub> ou 0.
                </span>
            )
        },
        {
            name: "Matriz Diagonal",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ), diz-se que A é matriz diagonal se os elementos a<sub>ij</sub> = 0 com i diferente de j.
                </span>
            )
        },
        {
            name: "Matriz Identidade",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Triangular Suberior",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Triangular Inferior",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Transposta",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Simétrica",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Anti-Simétrica",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Potência",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
        {
            name: "Matriz Periodica",
            definition: (
                <span>
                    Se A = [a<sub>ij</sub>] que pertence a (ℝ) e se m = n, então diz-se que A é uma matriz quadrada de ordem n.
                </span>
            )
        },
    ]