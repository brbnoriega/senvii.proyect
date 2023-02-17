import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Input, Switch, Stack, Button, Flex, Image } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'

//import github from '../../assets/img/github-mark.png';
//import theme from '../../resources/theme/index.js'

//import Header from "./Header";


export default function Register() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    //
    return (
        <>
            <Flex bg='lightgray' direction='column' p='10px'>
                <ArrowLeftIcon borderRadius='30px' w='40px' h='40px' p='8px' />
            </Flex>
            <Flex h='30vh' bg='lightgray' align='end'>
                <Flex direction='column' justify='end' w='50%' pb='10%' pl='5%'>
                    <Box fontWeight='semibold'>Completa tus</Box>
                    <Box fontWeight='semibold'>datos personales</Box>
                </Flex>
                <Flex direction='column' align='center' w='60%'  maxH='160px' pb='5%' pl='5%' >
                    <Image
                        borderRadius='full'
                        boxSize='55%'
                        maxH='120px'
                        maxW='120px'
                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                        alt='Dan Abramov'
                    />
                    <Box fontWeight='semibold'>
                        Subir foto
                    </Box>
                </Flex>
            </Flex>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <label>
                    <Flex fontWeight='semibold' direction='row' pl='10%' pt='5%'>
                        Nombres y apellido:
                    </Flex>
                    <Flex direction='row' spacing={4} align='center' justify='center' pt='4%'>
                        <Input {...register("nameAndLastname")} placeholder='' w='80%' maxW='600px' />
                    </Flex>
                </label>
                <label>
                    <Flex fontWeight='semibold' direction='row' pl='10%' pt='5%'>
                        Numero de identificacion:
                    </Flex>
                    <Flex direction='row' spacing={4} align='center' justify='center' pt='4%'>
                        <Input {...register("idNumber")} placeholder='' w='80%' maxW='600px' />
                    </Flex>
                </label>
                <label>
                    <Flex fontWeight='semibold' direction='row' pl='10%' pt='5%'>
                        Pais de origen:
                    </Flex>
                    <Flex direction='row' spacing={4} align='center' justify='center' pt='4%'>
                        <Input {...register("country")} placeholder='' w='80%' maxW='600px' />
                    </Flex>

                </label>
                <Flex fontWeight='semibold' direction='row' pl='10%' pt='4%'>
                    Selecione su tipo de entidad:
                </Flex>
                <Flex fontWeight='semibold' direction='row' spacing={4} align='center' justify='center' pt='4%'>
                    <Stack align='center' direction='row'>
                        <Box>Pública</Box>
                        <Switch size='lg' />
                        <Box>Privada</Box>
                    </Stack>
                </Flex>
                <label>
                    <Flex direction='row' pl='10%' pt='4%' fontWeight='semibold' >
                        Nombre de su entidad:
                    </Flex>
                    <Flex direction='row' spacing={4} align='center' justify='center' pt='4%'>
                        <Input {...register("entityName")} placeholder='' w='80%' maxW='600px' />
                    </Flex>
                </label>
                <label>
                    <Flex direction='row' pl='10%' pt='4%' fontWeight='semibold' >
                        Numero de telefono celular:
                    </Flex>
                    <Flex direction='row' spacing={4} align='center' justify='center' pt='4%'>
                        <Input {...register("cellphoneNumber")} placeholder='' w='80%' maxW='600px' />
                    </Flex>
                </label>
                <label>
                    <Flex direction='row' pl='10%' pt='4%' fontWeight='semibold' >
                        E-mail:
                    </Flex>
                    <Flex direction='row' spacing={4} align='center' justify='center' pt='4%'>
                        <Input {...register("email")} placeholder='' w='80%' maxW='600px' />
                    </Flex>
                </label>

                <p>{data}</p>

                <Flex direction='row' spacing={4} align='center' justify='center' pt='4%' pb='4%'>
                    <Button type="submit" border='1px' boxShadow='xl' maxW='600px' color='white' w='90%' bg='black' borderRadius='30px' _hover={{ color: 'black', bg: 'white' }} >
                        Registrate
                    </Button>
                </Flex>
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