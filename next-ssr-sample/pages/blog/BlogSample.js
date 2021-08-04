
export default function BlogSample({ posts }) {
  return (
    <div>
      <ul>
        {posts.map( (data, index) => {
          return <li key={index}>{data.title}</li>
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
  const posts = await res.json()
  return { props: { posts } }
}