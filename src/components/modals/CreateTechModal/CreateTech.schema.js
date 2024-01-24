import { z } from "zod";

const CreateTechFormSchema = z.object({
    title: z.string().min(1, "Insira uma tech."),
    status: z.string().min(1, "Insira o nível."),
});

export { CreateTechFormSchema };