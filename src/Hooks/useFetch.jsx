import { useState } from "react";
export const useFetch = () => {
    const [user, setUser] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleGetData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser = await userData.json();

        if (newUser.name) {
            const { avatar_url, name, bio, login } = newUser;
            setCurrentUser({ avatar_url, name, bio, login });

            const reposData = await fetch(
                `https://api.github.com/users/${user}/repos`
            );
            const newRepos = await reposData.json();

            if (newRepos.length) {
                setRepos(newRepos);
            }
        }
    };

    return {
        setUser,
        currentUser,
        repos,
        setCurrentUser,
        setRepos,
        handleGetData,
    };
};
