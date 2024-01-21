import { z } from "zod";

const LoginFormSchema = z.object({
    email: z.string().min(1, "Insira seu email.").email("Insira um email válido."),
    password: z.string().min(1, "Insira sua senha.")
    });

export { LoginFormSchema };