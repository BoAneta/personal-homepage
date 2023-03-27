import axios from "axios";

export const getRepoFromAPi = async () =>
    await axios.get("https://api.github.com/users/BoAneta/repos")
        .then(response => response.data);
