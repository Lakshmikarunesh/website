import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'The Future of Web Development: Trends to Watch',
    date: 'March 15, 2024',
    excerpt: 'Explore the latest trends shaping the future of web development and how they impact businesses.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Designing for Accessibility: A Complete Guide',
    date: 'March 10, 2024',
    excerpt: 'Learn how to create inclusive digital experiences that work for everyone.',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Optimizing Performance in Modern Web Apps',
    date: 'March 5, 2024',
    excerpt: 'Best practices for building fast and efficient web applications.',
  },
];

const Blog = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on technology, design, and digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-gray-800"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-purple-400 text-sm">{article.date}</span>
                <h3 className="text-xl font-semibold mt-2 group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mt-2">{article.excerpt}</p>
                <button className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-500/10 border border-purple-500/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-all">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;