import { createBrowserRouter, RouterProvider} from "react-router-dom"

import App from "./App"
import { Projects } from "./components/Projects";
import { PageNavigation } from "./components/Navigation";
import { WorkspaceProject } from "./components/WorkspaceProject";

// Testing Function: HelloWorld(): 
function HelloWorld(){
    console.log("Hello World!"); // Testing
    if (window.innerWidth <= 600)
    {
        console.log("Window Width: ", window.innerWidth);
    }
}

// Router(): The main router component container.
const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            loader: HelloWorld(),
        },
        
        {
            path: "projects/:projectId",
            element: <Projects />,
            children: [
                {index: true, element: <PageNavigation />},
            ],
        },

        {
            path: "workspace/:workspaceId",
            element: <WorkspaceProject />,
            children: [
                {index: true, element: <PageNavigation />},
            ]
        },
    ]);
    return <RouterProvider router={router}/>
}

export default Router;