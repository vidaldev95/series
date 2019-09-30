import React, { useState } from 'react'

const NewGenre = () =>{
    return(
        <div className='container'>
            <h1>Novo Genêro</h1>
            <form>
                <div class='form-group'>
                    <label for='name'>Nome</label>
                    <input type='text' class='form-control' id='name' placeholder='Nome' />
                </div>
                <button type='button' class='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default NewGenre