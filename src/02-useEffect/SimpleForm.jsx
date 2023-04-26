import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            username:'strider',
            email:'strider@google.com'
        }
    )

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value }= target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    /*useEffect: en el primer parametro lleva una funcion de callback y en 
    el segundo las dependencias(indica cuando va a ser llamado el efecto)*/
    useEffect( () => {
      // console.log('useEfect called');

    }, []);
    useEffect( () => {
      // console.log('formState changed');

    }, [formState]);
    useEffect( () => {
      // console.log('email changed');

    }, [ email ]);
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
        />
        <input 
        type="email"
        className="form-control mt-2"
        placeholder="correo@google.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
        />
        {
          (username=== 'strider') && <Message />
        }

    </>
  )
}
