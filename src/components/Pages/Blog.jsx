import React from 'react'
import H1 from '../Common/Typograph/H1'
import Grid10 from '../Common/Layout/Grids/Grid10'
import Grid4 from '../Common/Layout/Grids/Grid4'
import H2 from '../Common/Typograph/H2'
import P from '../Common/Typograph/P'
import Sections from '../Sections/Sections'
import ContainerFlex from '../Common/Layout/Container/ContainerFlex'
import './Blog.css'
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/react-hooks'
import { useQuery } from '@apollo/react-hooks'

const BlogCard = ({imgsrc,title,text,alt}) => {
  return <Grid4 className='blog-card'>
    <img src={imgsrc} alt={alt} />
    <H2>{title}</H2>
    <P>{text}</P>
    <div className='blog-card-btn'>
      <a href="/">Saiba Mais +</a>
    </div>
  </Grid4>
}

const client = new ApolloClient(
  {
    uri:'https://dsblog.evoi.com.br/?graphql',
    cache: new InMemoryCache()
  }
)

const POSTS_QUERY = gql`
  query NewQuery {
    posts {
      nodes {
        id
        title
        link
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`

const Posts = () => {
  const {loading, error, data} = useQuery(POSTS_QUERY)    
  const posts = data?.posts.nodes;

  if (loading) {
    return <p>Loading Posts ...</p>
  }
  if (error) {
    return <p>Error ...</p>
  }
  return <>
    {posts.map( ({id, title, link, featuredImage}) => {            
      return <BlogCard key={id} title={title} imgsrc={featuredImage.node.mediaItemUrl} />
    })}    
  </>
}

//
const Blog = () => {
  return <>
    <section className='blog-header'>
      <H1 className='text-center'>Blog</H1>
      <div className="container flex-center">
        <Grid10>
          <P className='text-center'>
              A Decor Sélis apresenta a linha de produtos Duraflor, inspirados no que há de mais moderno no mercado internacional. Pisos Laminados de alta resistência e Pisos LVT, vinílicos de última geração para harmonizar sua residência ou ambientes corporativos, além de uma linha completa de acessórios de acabamento e instalação.
          </P>
        </Grid10>
      </div> 
    </section>

    <Sections className='blog-grid'>
      <ContainerFlex className='wrap'>
        <ApolloProvider client={client}>
          <Posts />
        </ApolloProvider>        
      </ContainerFlex>
    </Sections>
  </>
}

export default Blog