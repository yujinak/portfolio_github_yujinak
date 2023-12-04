import { P } from './styles'

//tipagem
export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

//elementos
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
