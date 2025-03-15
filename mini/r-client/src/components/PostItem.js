import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const PostItem = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-item-container">
            <div className="post-header">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                    <span className="post-author">By: {post.author}</span>
                    <span className="post-date">Date: {new Date(post.date).toLocaleDateString()}</span>
                </div>
            </div>
            <div className="post-body">
                <p className="post-content">{post.post}</p>
            </div>
            <div className="post-details">
                <div className="detail-item">
                    <span className="detail-label">DID:</span> {post.did}
                </div>
                 <div className="detail-item">
                    <span className="detail-label">Category:</span> {post.cat3}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Citation:</span> {post.blogcite}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Email:</span> {post.email}
                </div>
                <div className="detail-item">
                    <span className="detail-label">Category ID:</span> {post.categoryId}
                </div>
                 <div className="detail-item">
                    <span className="detail-label">State:</span> {post.state}
                </div>
            </div>
        </div>
    );
};

export default PostItem;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { API_BASE_URL } from '../config';

// const PostItem = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
//                 setPost(response.data);
//             } catch (error) {
//                 console.error("Error fetching post:", error);
//             }
//         };

//         fetchPost();
//     }, [id]);

//     if (!post) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <div className="container mt-4">
//                 <div className="card shadow-sm">
//                 <p className="card-text">{post.title}</p>
//                     <div className="card-body">
//                         <h5 className="card-title">Posts</h5> 
//                         <hr />
//                         <p className="card-text">{post.post}</p>
//                         <p className="card-text">{post.did}</p>
//                         <p className="card-text">{post.date}</p>
//                         <p className="card-text">{post.author}</p>
//                         <p className="card-text">{post.cat3}</p>
//                         <p className="card-text">{post.blogcite}</p>
//                         <p className="card-text">{post.email}</p>
//                         <p className="card-text">{post.categoryId}</p>
//                         <p className="card-text">{post.state}</p>
//                         {/* <p>{post.comments}</p> */}

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default PostItem;
