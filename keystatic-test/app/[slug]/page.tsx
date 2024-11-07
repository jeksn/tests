import '../styles.css';
import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '../reader';
import { markdocConfig } from '../../keystatic.config';

export default async function PageOrPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);
  const page = await reader.collections.pages.read(slug);

  if (!post && !page) return <div>Post or Page not found!</div>;

  const { node } = await (post?.content() || page?.content());

  const errors = Markdoc.validate(node, markdocConfig);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }

  const renderable = Markdoc.transform(node, markdocConfig);

  return (
    <div>
      <h1>{post?.title || page?.title}</h1>
      {Markdoc.renderers.react(renderable, React)}
    </div>
  );
}

export async function generateStaticParams() {
  const postSlugs = await reader.collections.posts.list();
  const pageSlugs = await reader.collections.pages.list();

  return [...postSlugs.map(slug => ({ slug })), ...pageSlugs.map(slug => ({ slug }))];
}

