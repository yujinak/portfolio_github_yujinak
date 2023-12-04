import { Titulo as TituloEstilo } from './styles'

//tipagem
export type Props = {
  children: string
  fontSize?: number
}

//elementos
const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
