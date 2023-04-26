import { memo } from "react"
//memo permite que  react memorize un componente, permite optimizar cuando hay componentes grandes
export const Small = memo (({ value }) => {

    console.log('Me volvi a dibujar :(')

  return (
    <small>{ value }</small>
    )
})
