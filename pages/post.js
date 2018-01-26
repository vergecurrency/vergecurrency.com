import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'

import ServerProps from '../components/ServerProps';

const Post =  ({ show, store }) => (
    <Layout loading={ store && store.showLoader }>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  return { show }
}

export default ServerProps(Post)
