import { Header } from "./components/Header";
import { ItemList } from "./components/ItemList";
import "./App.css";
import background from "./assets/background.png";
import { useFetch } from "./Hooks/useFetch";

function App() {
    const { currentUser, handleGetData, repos, user, setUser } = useFetch();
    return (
        <div className="App">
            <Header />
            <div className="conteudo">
                <img
                    src={background}
                    className="background"
                    alt="background app"
                />
                <div className="info">
                    <div>
                        <input
                            name="usuario"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="@username"
                        />
                        <button onClick={handleGetData}>Buscar</button>
                    </div>
                    {currentUser?.name ? (
                        <>
                            <div className="perfil">
                                <img
                                    src={currentUser.avatar_url}
                                    className="profile"
                                    alt="profile github"
                                />
                                <div>
                                    <h3>{currentUser.name}</h3>
                                    <span>@{currentUser.login}</span>
                                    <p>{currentUser.bio}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    ) : null}

                    {repos?.length ? (
                        <div>
                            <h4 className="repositorio">Repositórios</h4>
                            {repos.map((repo) => (
                                <ItemList
                                    key={repo.id}
                                    title={repo.name}
                                    description={repo.description}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default App;
