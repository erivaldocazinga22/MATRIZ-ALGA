import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

type chatWithGeminiResponse = {
    status: number,
    message: string,
    data: string
}

export const useChatWithGemini = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationKey: ["gemini-response"],
        mutationFn: async (params: string): AxiosPromise<chatWithGeminiResponse> => {
            return await axios.post("http://127.0.0.1:3000/matrix", {
                type: params
            });
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["gemini-response"] })
        },
    });

    return {
        ...mutate,
        data: mutate.data?.data.data
    }
}