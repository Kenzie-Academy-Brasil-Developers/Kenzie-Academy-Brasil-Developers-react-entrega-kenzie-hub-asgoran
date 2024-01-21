import { z } from "zod";

const RegisterFormSchema = z.object({
    name: z.string().min(1, "Insira seu nome.").max(40),
    email: z.string().min(1, "Insira seu email.").email("Insira um email válido."),
    password: z.string().min(8, "Sua senha precisa conter no mínimo 8 caracteres.")
        .max(20)
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
        .regex(
            /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
            "É necessário conter pelo menos um caracter especial."
        ),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
    bio: z.string().min(12, "Sua descrição precisa ter no mínimo 12 caracteres."),
    contact: z.string().min(1, "Insira um contato válido.").max(40, "Insira um contato válido."),
    course_module: z.string().min(2, "Escolha um módulo."),
})
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem.",
        path: ["confirmPassword"],
    })
    .refine(({ name, password }) => !password.includes(name), {
        message: "A senha não pode conter seu nome.",
        path: ["password"],
    });

export { RegisterFormSchema };