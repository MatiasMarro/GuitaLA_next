import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import ListadoBlog from '../components/ListadoBlog'


const Blog = ({entradas}) => {

  

  return (
        <Layout
            pagina="Blog"
        >
            <main className='contenedor'>
              <ListadoBlog 
                entradas={entradas}
              />
            </main>
        </Layout>
  )
}

export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
  console.log(url)
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return {
      props: {
          entradas
      }
  }
}


export default Blog