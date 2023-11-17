import { useState, ChangeEvent, useContext, FormEvent } from "react";
import { ErrorProps, FormComponentProps, FormProps } from "../../types/types";
import { ContainerForm, InputWrapper } from "./styles";
import { ButtonForm } from "../ButtonForm";
import { ErrorMensage } from "../ErrorMensage";
import { ErrorsContext } from "../../contexts/ShowError";
import emailjs from "@emailjs/browser"
import { toast, Toaster } from 'react-hot-toast';

export function Form({ formContato }: FormComponentProps) {

    const [form, setForm] = useState<FormProps>({
        name: "",
        email: "",
        mensage: ""
    });
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const error: ErrorProps = useContext(ErrorsContext);

    function handleForm(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>):void {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSendForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        
        console.log(error.showError);
        
        if (!form.name || !form.email || !form.mensage || !emailRegex.test(form.email)) {
            if (!form.name || !form.email || !form.mensage) {
                error.setErrorMensage("Preencha todos os Campos*");
            } else {
                error.setErrorMensage("Insira um email válido*");
            }

            error.setShowError(true);
            
            setTimeout(() => {
                error.setShowError(false);
            }, 3000);
            
            return;
        }

        try {
            const templateParams = {
                from_name: form.name,
                email: form.email,
                message: form.mensage
            }
    
            await emailjs.send("service_8rnhrac", "template_prta00h", templateParams, "KdDtpZBtIXBKaZSoh");
    
            setForm({
                name: "",
                email: "",
                mensage: ""
            })
    
            return toast.success('Mensagem enviada com sucesso!');
        } catch (error) {
            return toast.error("Não foi possível enviar sua mensagem")
        }
    }

    return (
        <ContainerForm onSubmit={handleSendForm}>
            <fieldset>
                <legend
                    className={formContato ? "form-contact" : ""}>
                    {formContato ? "Envie-me uma mensagem" : "Preencha os campos abaixo"}
                </legend>

                <InputWrapper>
                    <label htmlFor="name">Nome*</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        value={form.name}
                        onChange={(e) => handleForm(e)} />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => handleForm(e)} />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="mensagem">Mensagem*</label>
                    <textarea
                        name="mensage"
                        id="mensage"
                        placeholder="Digite sua mensagem"
                        value={form.mensage}
                        onChange={(e) => handleForm(e)} />
                </InputWrapper>

            {error.showError && <ErrorMensage text={error.errorMensage} />}
            </fieldset>

            <ButtonForm width="biggest" />

            <Toaster toastOptions={{
                duration: 3000
            }} />
        </ContainerForm>
    )
}