import React from 'react';

const BlogPosts = ({ posts }) => {
  return (
    <section className="featured-section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">פוסטים אחרונים בבלוג</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="card bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{post.title_he}</h3>
              <p className="mb-4">{post.content_he.slice(0, 100)}...</p>
              <a href={`/blog#post-${post.id}`} className="text-blue-600 hover:underline">קרא עוד</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
