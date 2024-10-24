import React, { useEffect, useState } from 'react';

const Home = () => {
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesResponse = await fetch(`${process.env.REACT_APP_API_URL}/courses`);
                const coursesData = await coursesResponse.json();
                setFeaturedCourses(coursesData);

                const testimonialsData = [
                    { author: "שרה כהן", content: "הקורסים כאן עזרו לי להתקדם בעברית בצורה מדהימה!" },
                    { author: "דוד לוי", content: "המורים מעולים והשיטה עובדת. ממליץ בחום!" }
                ];
                setTestimonials(testimonialsData);

                const postsResponse = await fetch(`${process.env.REACT_APP_API_URL}/blog`);
                const postsData = await postsResponse.json();
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className="hero">
                <div className="hero-content fade-in">
                    <h1 className="text-4xl font-bold mb-4">ברוכים הבאים ללימוד עברית</h1>
                    <p className="text-xl mb-8">גלו את יופייה של השפה העברית עם הקורסים המעמיקים שלנו</p>
                    <a href="/courses" className="btn btn-primary">התחל ללמוד עכשיו</a>
                </div>
            </section>

            <section className="featured-section">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">הקורסים המובילים שלנו</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredCourses.map(course => (
                            <div key={course.id} className="card bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-2">{course.title_he}</h3>
                                <p className="mb-4">{course.description_he.slice(0, 100)}...</p>
                                <a href="/courses" className="btn btn-primary">למידע נוסף</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">מה אומרים התלמידים שלנו</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <p className="mb-4">"{testimonial.content}"</p>
                                <p className="font-bold">- {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">פוסטים אחרונים בבלוג</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map(post => (
                            <div key={post.id} className="card bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold mb-2">{post.title_he}</h3>
                                <p className="mb-4">{post.content_he.slice(0, 100)}...</p>
                                <a href={`/blog#post-${post.id}`} className="text-blue-600 hover:underline">קרא עוד</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
