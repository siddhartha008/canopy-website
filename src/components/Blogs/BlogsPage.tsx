import React, { useState } from 'react';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

type BlogItem = {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
};

const BlogModal: React.FC<{ blog: BlogItem; onClose: () => void }> = ({ blog, onClose }) => (
  <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4" onClick={onClose}>
    <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8" onClick={(event) => event.stopPropagation()}>
      <img src={mediaUrl(blog.image)} alt={blog.title} className="w-full h-64 object-cover rounded-lg mx-auto mb-4" />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-orange">{blog.title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl" aria-label="Close">&times;</button>
      </div>
      <div className="text-gray-700 space-y-4 prose">
        {blog.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

const BlogsPage: React.FC = () => {
  const blogs = useSite().blogs;
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <section className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-primary-orange mb-14">{blogs.title}</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {blogs.posts.map((item) => (
            <div key={item.id} className="bg-[#FFF6E6] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 text-center w-full max-w-sm md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]">
              <img src={mediaUrl(item.image)} alt={item.title} className="w-full h-44 object-cover rounded-xl mb-6 border border-orange-100" style={{ background: '#fff' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="italic text-gray-600 text-sm mb-1">{item.excerpt}</p>
              <button onClick={() => setSelectedBlog(item)} className="mt-auto text-primary-orange font-bold text-lg hover:underline">
                Read More &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
    </section>
  );
};

export default BlogsPage;
