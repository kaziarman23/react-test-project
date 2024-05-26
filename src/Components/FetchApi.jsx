import { useState } from "react";
import { useEffect } from "react";

function FetchApi() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log(error));
    });

    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return (
                        <li className="text-center" key={post.id}>
                            {post.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FetchApi;
