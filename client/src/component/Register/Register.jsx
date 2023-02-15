import { useState } from "react";
import { useForm } from "react-hook-form";
//import Header from "./Header";


export default function Register() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    //see what happen with the 

    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <h3>Completa los datos de tu empresa</h3>
            <label>
                Nombre de tu empresa
                <input {...register("companyName")} placeholder="Nombre de la empresa" />
            </label>          
            <p>Tipo de empresa</p> 
            <input {...register("companyType")} type="radio" id="publica" name="type" value="publica" checked/>
            Publica<br />
            <input {...register("companyType")} type="radio" id="privada" name="type" value="privada" />
            Privada<br />
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
            <label>
                Cargo en la empresa
                <input {...register("positionInTheCompany")} placeholder="Cargo en la empresa" />
            </label><br />
            <label>
                Ubicacion de la via
                <input {...register("locationOfTheRoad")} placeholder="Ubicacion de la via" />
            </label><br />
            <label>
                Numero de telefono celular
                <input {...register("cellPhone")} placeholder="Telefono celular" />
            </label><br />
            <label>
                Correo corporativo
                <input {...register("corporateMail")} placeholder="Correo corporativo" />
            </label><br />
            {/* <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select><br /> */}
           {/*  <textarea {...register("aboutYou")} placeholder="About you" /> */}
            <p>{data}</p>
            <input type="submit" />
        </form>
    );
}