import headerUrl from './static/mygarden.png'
import type { Request } from "../../router" 
import './garden.css'
import November from "./posts/november/november"

export default function Garden (req: Request) {
    const front_page_posts = [November(), November(), November()];
    const front_page_posts_html = front_page_posts.reduce((previous: string, currentPost: string): string => {
        return previous + `
        <div class="postItem">
            ${currentPost}
        </div>
        <hr class="itemBreak">
        `
    }, "");
    const page = /* html */ `
    <div class="centerBanner">
        <h1>
            <img src="${headerUrl}"/ alt="My Garden :3"/>
        </h1>
        <div class="postColumn">
            ${front_page_posts_html}
        </div>
    </div>
    `;
    return page;
}
