import Sobre from '../components/Pages/Sobre'
import Produtos from '../components/Pages/Produtos'
import Contato from "../components/Pages/Contato"
import Blog from '../components/Pages/Blog'

export const _rotas = [
  {id:0,path: null,element:<Produtos />,link:'produtos'},
  {id:1,path:'sobre', element: <Sobre />, link:'sobre'},
  {id:2,path:'blog', element: <Blog />, link:'blog'},
  {id:3,path:'contato', element: <Contato />, link:'contato'},
]
export const _subRotas = [
  {id:0,path:"cortinas", to:'produtos/cortinas', link:'cortinas', element:<Produtos />},
  {id:1,path:"persianas", to:'produtos/persianas', link:'persianas', element:<Produtos />},    
] 