import { getPostsWithTagNames } from '@/lib/wordpress/fetch-posts';
import { getMediaById } from '@/lib/wordpress/media';
import { ImageResponse } from 'next/og';
import { WP_REST_API_Post } from 'wp-types';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Fetch the post by slug
  const { posts } = await getPostsWithTagNames({
    slug,
  });

  // Ensure `posts` is a single post
  const post = (Array.isArray(posts) ? posts[0] : posts) as WP_REST_API_Post & {
    tagDetails?: { name: string; slug: string }[];
  };

  const data = post as WP_REST_API_Post & {
    meta: {
      yoast_head_json: any;
    };
  };

  const yoast_head_json = data.meta.yoast_head_json;

  const ogImage =
    yoast_head_json?.og_image ||
    (await getMediaById(post.featured_media!))?.source_url;

  if (ogImage) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            backgroundImage: `url(${ogImage})`,
            backgroundSize: 'cover', // Ensures the image covers the entire background
            backgroundPosition: 'center', // Centers the image
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            color: 'white', // Adjust text color for readability
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Optional: to improve text readability on image
          }}></div>
      ),
      {
        ...size,
      },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to right, #614385, #516395)', // Fallback gradient background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          color: 'white', // Text color for readability
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Optional: for text readability
        }}>
        {post.title.rendered}
      </div>
    ),
    {
      ...size,
    },
  );
}
