import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/blog?page=${currentPage}`);
                const data = await response.json();
                setPosts(data.items);
                setTotalPages(data.totalPages); // Adjust based on your API response
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [currentPage]);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">בלוג לימוד עברית</h1>
            <div className="space-y-8">
                {posts?.map(post => (
                    <article key={post.id} id={`post-${post.id}`} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-2">{post.title_he}</h2>
                        <h3 className="text-xl font-bold mb-2">{post.title_en}</h3>
                        <p className="text-gray-600 mb-4">{new Date(post.date_posted).toLocaleDateString('he-IL')}</p>
                        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content_he }} />
                        <div className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: post.content_en }} />
                    </article>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)} className="btn btn-primary mx-1">הקודם</button>
                )}

                {/* Render pagination */}
                {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    return (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`btn btn-primary mx-1 ${currentPage === pageNum ? 'bg-blue-800' : ''}`}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)} className="btn btn-primary mx-1">הבא</button>
                )}
            </div>
        </div>
    );
};

export default Blog;
