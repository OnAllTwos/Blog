import type { Request } from "../../router" ;
import "./home.css";
import { PostContainer } from "../../post/post";
import { OldBooks } from "./posts/old_books/old_books";

export default function Home (req: Request){
    const front_page_posts = [
        PostContainer({
            tags: ["garden"],
            content: OldBooks()
        })
    ];
    const front_page_posts_html = front_page_posts.reduce(
        (previous: string, currentPost: string): string => {
        return previous + `
        <div class="postItem">
            ${currentPost}
        </div>
        <hr class="itemBreak">
        `
    }, "");
    const page = /* html */ `
    <div class="centerBanner">
        <div class="postColumn">
            ${front_page_posts_html}
        </div>
    </div>
    `;
    return page;
}
