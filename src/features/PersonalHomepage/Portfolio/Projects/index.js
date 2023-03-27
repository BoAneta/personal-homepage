import { Error } from "./Error";
import { Loading } from "./Loading";
import { Repos } from "./Repos";


export const Projects = ({ status, repositories }) => {
    switch (status) {
        case "":
            return [];

        case "loading":
            return <Loading />
        
        case "error":
            return <Error />
        
        case "success":
            return <Repos repositories={repositories} />
    }
};