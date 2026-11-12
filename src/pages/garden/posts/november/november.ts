import borageUrl from "./static/borage0.jpeg"

export default function November () {
    const page = /* html */ `
    <div>
        <h2 class="postTitle">
            November
        </h2>
        <div class="backdrop card">
                <img src="${borageUrl}" class="framedImage"/>
        </div>
        <p>
        </p>
    </div>
    `
    return page
}
