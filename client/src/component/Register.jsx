import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
//import Header from "./Header";


export default function Register() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <h3>Completa los datos de tu empresa</h3>
            <label>
                Nombre de tu empresa
                <input {...register("companyName")} placeholder="Nombre de la empresa" />
            </label>
            <p>Tipo de empresa</p>
            <input type="radio" id="publica" name="type" value="publica" />
            <label for="html">Publica</label><br />
            <input type="radio" id="privada" name="type" value="privada" />
            <label for="css">Privada</label><br />
            <label>
                Actividad que realiza
                <input {...register("Activity")} placeholder="Actividad que realiza" />
            </label><br />
            <label>
                Rubro de tu empresa
                <input {...register("companySector")} placeholder="Rubro de la empresa" />
            </label><br />
            <label>
                Ubicacion del proyecto
                <input {...register("projectLocation")} placeholder="Ubicacion del proyecto" />
            </label><br />
            <label>
                Nombre del responsable
                <input {...register("namePersonInCharge")} placeholder="Nombre del responsable" />
            </label><br />
            <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select><br />
            <textarea {...register("aboutYou")} placeholder="About you" />
            <p>{data}</p>
            <input type="submit" />
        </form>
    );
}