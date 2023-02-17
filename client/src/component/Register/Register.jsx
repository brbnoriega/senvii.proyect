import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Input, Switch, Stack } from '@chakra-ui/react'
//import Header from "./Header";


export default function Register() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    //

    return (
        <>

            <Box h='20vh' bg='gray' bgRepeat='no-repeat' bgSize='cover'>
                <Box>Completa tus</Box>
                <Box>datos personales</Box>
            </Box>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <label>
                    Nombres y apellido:
                    <Input {...register("nameAndLastname")} placeholder='' />
                </label>
                <label>
                    Numero de identificacion:
                    <Input {...register("idNumber")} placeholder='' />
                </label>
                <label>
                    Pais de origen:
                    <Input {...register("country")} placeholder='' />
                </label>
                <Stack align='center' direction='row'>
                    <Box>Pública</Box>
                    <Switch size='lg' />
                    <Box>Privada</Box>
                </Stack>
                <label>
                    Nombre de su entidad:
                    <Input {...register("entityName")} placeholder='' />
                </label>
                <label>
                    Numero de telefono celular:
                    <Input {...register("cellphoneNumber")} placeholder='' />
                </label>
                <label>
                    E-mail:
                    <Input {...register("email")} placeholder='' />
                </label>

                <p>{data}</p>
                <input type="submit" value='Registrar' />
            </form>
        </>
    );
}





/* 
 <label>
                    Actividad que realiza:
                    <input {...register("Activity")} placeholder="Actividad que realiza" />
                </label><br />
                <label>
                    Rubro de tu empresa:
                    <input {...register("companySector")} placeholder="Rubro de la empresa" />
                </label><br />
                <label>
                    Ubicacion del proyecto:
                    <input {...register("projectLocation")} placeholder="Ubicacion del proyecto" />
                </label><br />
                <label>
                    Nombre del responsable:
                    <input {...register("namePersonInCharge")} placeholder="Nombre del responsable" />
                </label><br />
                <label>
                    Cargo en la empresa:
                    <input {...register("positionInTheCompany")} placeholder="Cargo en la empresa" />
                </label><br />
                <label>
                    Ubicacion de la via:
                    <input {...register("locationOfTheRoad")} placeholder="Ubicacion de la via" />
                </label><br />
                <label>
                    Numero de telefono celular:
                    <input {...register("cellPhone")} placeholder="Telefono celular" />
                </label><br />
                <label>
                    Correo corporativo:
                    <input {...register("corporateMail")} placeholder="Correo corporativo" type="email" name="email" />
                </label><br />

*/