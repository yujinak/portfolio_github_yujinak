import { P } from './styles'

//tipagem
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

//elementos
const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
