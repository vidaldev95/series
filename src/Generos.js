import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('api/genres')
            .then(res => {
               setData(res.data.data)
            })
    }, [])

    const deleteGenre = id => {
        axios
            .delete('/api/genres/' + id)
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
                <td>
                    <button className='btn btn-danger' onClick={()=>deleteGenre(record.id)}>Remover</button>
                    <Link className='btn btn-info' to={'/generos/' + record.id}>Editar</Link>
                </td>
            </tr>
        )
    }

    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Genêros</h1>
                <div className='alert alert-warning' role='alert'>
                    Genêros Não Encontrados
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Genêros</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
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

export default Generos