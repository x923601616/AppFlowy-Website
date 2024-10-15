import MDXContent from '@/components/blog/mdx-render';

import { PostData } from '@/lib/posts';
import React from 'react';
import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

function Article({ post }: { post: PostData }) {
  return (
    <CardContent className={'p-0'}>
      <article
        className={cn(
          'prose max-w-none',
          'prose-headings:scroll-mt-28 prose-headings:font-heading prose-headings:font-bold lg:prose-headings:scroll-mt-[8.5rem]',
          'prose-lead:text-muted-foreground',
          'prose-a:font-medium',
          'prose-hr:my-4 prose-hr:border-muted',
          'prose-ol:pl-8 prose-ol:ml-4 prose-ol:space-y-2 prose-ol:leading-snug',
          'prose-ul:pl-8 prose-ul:ml-4 prose-ul:space-y-2 prose-ul:leading-snug',
          'prose-table:overflow-auto prose-table:shadow-md prose-table:rounded-lg prose-table:mt-4',
          'prose-img:rounded-lg prose-img:shadow-md prose-img:mt-4',
          'prose-code:mt-4 prose-code:rounded-[4px] prose-code:border prose-code:px-2 prose-code:text-black prose-code:font-normal prose-code:bg-gray-100 prose-code:font-mono'
        )}
      >
        {post.content && <MDXContent source={post.content} />}
      </article>
    </CardContent>
  );
}

export default Article;
