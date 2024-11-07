import Link from 'next/link';
import { reader } from './reader';
import './styles.css';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();
  const pages = await reader.collections.pages.all();

  return (
    <div>
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
      <h2>Pages</h2>
      <ul>
        {pages.map(page => (
          <li key={page.slug}>
            <Link href={`/${page.slug}`}>{page.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
