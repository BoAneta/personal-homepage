
export const getRepoFromAPi = async () => {
    const response =    await fetch("https://api.github.com/users/BoAneta/repos");
        if (!response.ok) {
            throw new Error(response.text);
        }
    return await response.json();
};


   
