import Link from 'next/link';
import{ use } from 'react'

async function getPosts() {
    let posts = await fetch("https://dummyjson.com/posts?limit=3");

    return posts.json();
}

export default function Layout({children}) {
    let { posts } = use(getPosts());
    // console.log(posts);

    return (
        <div>
            <ul>
                {posts.map((pos) => (
                    <li key={pos.id}><Link href={`/posts/${pos.id}`}>{pos.title}</Link></li>
                ))}
            </ul>
            <li>{children}</li>
        </div>
    );
}