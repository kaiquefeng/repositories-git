import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';

import './_app';


const Home = ({ repositories }) => (
    <div className="repositorios">
        { repositories.map(repo => (
            <div className="card">
                <img key={repo.id} src={ repo.owner.avatar_url} />
                <div className="text-card">
                    <a href={repo.html_url} target="_blank"><h1 key={repo.id}>{ repo.name }</h1></a>
                    <p key={repo.id}>{ repo.full_name}</p>
                    <p className="linguagem" key={repo.id}>{ repo.language}</p>

                </div>
                {/* <Link href="/produtos" title="Produtos"><button>Produtos</button></Link> */}
            </div>

        )) }
    </div>
);

Home.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/users/kaiquemaia/repos');
    const repositories = await response.json();

    return { repositories };
}

export default Home;