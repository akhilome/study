import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import styles from './blog.module.scss';
import Head from '../components/head';

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      nodes {
        title
        slug
        publishedDate(fromNow: true)
      }
    }
  }
`;

const BlogPage = ({
  data: {
    allContentfulBlogPost: { nodes },
  },
}) => {
  return (
    <div>
      <Layout>
        <Head title="Latest Posts" />
        <h1>Blog</h1>
        <ol className={styles.posts}>
          {nodes.map(node => (
            <li className={styles.post}>
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.title}</Link>
              </h2>
              <p>{node.publishedDate}</p>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  );
};

export default BlogPage;

/* Legacy?

  // const {
  //   allMarkdownRemark: { edges },
  // } = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // return (
  //   <div>
  //     <Layout>
  //       <h1>Blog Page</h1>
  //       <ol className={styles.posts}>
  //         {edges.map(edge => (
  //           <li className={styles.post}>
  //             <h2>
  //               <Link to={`/blog/${edge.node.fields.slug}`}>
  //                 {edge.node.frontmatter.title}
  //               </Link>
  //             </h2>
  //             <p>{edge.node.frontmatter.date}</p>
  //           </li>
  //         ))}
  //       </ol>
  //     </Layout>
  //   </div>
  // )

*/
