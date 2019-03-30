import { withRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../components/MyLayout';

// const Post = ({ show }) => (
//   <Layout>
//     <h1>{show.name}</h1>
//     <p>{show.summary.replace(/<[/]?p/g, '')}</p>
//     <img src={show.image.medium} alt={show.name} />
//   </Layout>
// );

// Post.getInitialProps = async ({ query: { id } }) => {
//   const show = await (await fetch(`https://api.tvmaze.com/shows/${id}`)).json();
//   console.log(`Fetched show: ${show.name}`);
//   return { show };
// };

export default withRouter(({ router: { query: { title } } }) => (
  <Layout>
    <h1>{title}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
          `}
      />
    </div>
    <style jsx global>
      {`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}
    </style>
  </Layout>
));

// export default Post;
