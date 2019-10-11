import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Series = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('api/series')
            .then(res => {
               setData(res.data.data)
            })
    }, [])

    const deleteSerie = id => {
        axios
            .delete('/api/series/' + id)
            .then(res => {
                const filter = data.filter(item => item.id !== id)
                setData(filter)
            })
    }

    const renderRow = record => {
        return(
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>{record.genre}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>deleteSerie(record.id)}>Remover</button>
                    <Link className='btn btn-info' to={'/series/' + record.id}>Info</Link>
                </td>
            </tr>
        )
    }

    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Séries</h1>
                <div className='alert alert-warning' role='alert'>
                    Séries Não Encontradas
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Séries</h1>
            <div>
                <Link className='white item-menu btn btn-info' to='/series/novo'>Nova Series</Link>
            </div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Gênero</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </table>
        </div>
    )
}

export default Series