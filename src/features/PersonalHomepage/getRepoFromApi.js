import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepoFromAPi = () =>
    axios.get(`${githubAPIBaseURL}/users/BoAneta/repos`)
        .then(response => response.data);
