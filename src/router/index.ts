export type Request = {
    path: string;
}

export type Route = {
    uri: string;
    callback: (request: Request) => string;
}

export class Router {
    routes: Route[]

    constructor() {
        this.routes = [];
    }

    get(uri: string, callback: (req: Request) => string){
        // Ensure each uri is registered only once
        this.routes.forEach(route => {
            if (route.uri === uri) throw new Error(
                `uri ${route.uri} has already been registered.`
            )
        })

        // Add route
        const newRoute: Route = {
            uri,
            callback
        }
        this.routes.push(newRoute);
    }

    navigate() {
        this.routes.some(route=>{
            let regEx = new RegExp(`^${route.uri}$`);
            let path = window.location.hash;

            if(path.match(regEx)){
                let req = { path }
                document.querySelector<HTMLDivElement>('#app')!.innerHTML = route.callback.call(this, req);
                console.log("here!")
            }
        })
    }

    init() {
        window.addEventListener('hashchange', () => {
            this.navigate();
        })
        this.navigate();
    }

}
