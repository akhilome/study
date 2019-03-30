import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';

// const Index = ({ shows = [] }) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async () => {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${data.length}`);
//   return { shows: data.map(entry => entry.show) };
// };

const getPosts = () => [
  { id: 'hello-nextjs', title: 'Hello Next.js' },
  { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
  { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
];

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: 'Arial';
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

const Blog = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>
        {`
          h1,
          a {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
