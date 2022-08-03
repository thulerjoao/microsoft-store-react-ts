const Home = () => {
    return(
        <div className="Home">
        <header className="headerHome">
            <h1>Microsoft Games</h1>
            <div>
                <div>João Pedro Thuler Lima</div>
                <div>Gerenciamento de usuário</div>
            </div>
        </header>
        <section className="filters">
            <p>Gêneros</p>
            <div>
            <ul className="genres">
                <li>Todos</li>
                <li>Ação</li>
                <li>Aventura</li>
                <li>FPS</li>
            </ul>
            <button>Favoritos</button>
            </div>
        </section>
        <main className="listaDeJogos">
            <p>Todos os Jogos</p>
            <div>Carrocel com cards dos jogos</div>
        </main>
        </div>
    )
}

export default Home