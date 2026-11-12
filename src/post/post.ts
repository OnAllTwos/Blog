import "./post.css"

type Tag = "garden" | "rant"

export interface Post {
    tags: Tag[];
    content: string;
}

export function PostContainer(post: Post): string {
    return /* html */ `
        <div class="postBackdrop">
            ${post.content}
        </div>
    `
}
