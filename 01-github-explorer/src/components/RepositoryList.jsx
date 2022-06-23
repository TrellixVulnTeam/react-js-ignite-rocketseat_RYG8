import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from 'react'

import '../styles/repositories.scss'

export function RepositoryList (){
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/wesleysantosdev/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </section>
    )
}