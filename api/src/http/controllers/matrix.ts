import { Request, Response } from "express";
import { chatWithGEMINI, reverseTextFormat } from "../../lib/utils";

export const MatrixController = async (request: Request, response: Response) => {
    const { type } = request.body;

    const textType = reverseTextFormat(type);

    const resposta  = await chatWithGEMINI(`
        Com base no texto fornecido, retorne o texto correspondente entre as seguintes opções:
        TEXTO FORNECIDO: "${textType}"
        OPÇÕES: 
            01. Matriz Quadrada,
            02. Matriz Nula,
            03. Matriz Diagonal,
            04. Matriz Identidade,
            05. Matriz Triangular Superior,
            06. Matriz Triangular Inferior,
            07. Matriz Transposta,
            08. Matriz Simétrica,
            09. Matriz Anti-Simétrica,
            10. Matriz Potência,
            11. Matriz Periodica,   
        
        retorne apenas o texto corespondente.
    `)

    response.json({
        status: 200,
        message: `Matriz do tipo ${textType}`,
        data: resposta
    })
}