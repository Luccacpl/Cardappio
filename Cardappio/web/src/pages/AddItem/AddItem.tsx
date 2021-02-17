import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import './AddItem.css';

import api from '../../services/api';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import CustomAside from '../../components/CustomAside/CustomAside';
import CustomButton from '../../components/CustomButton/CustomButton';


function AddItem() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [avaible, setAvaible] = useState('1');
    const [price, setPrice] = useState('');

    async function handleSubmit (event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('desc', desc);
        data.append('avaible', avaible);
        data.append('price', price);

        await api.post('category', {data});

        alert('Cadastro realizado com sucesso!');
        history.push('/item');

        console.log(data);

        console.log({
            name,
            desc,
            avaible,
            price,
        })
    }

    return(
        <div id="page-AddItem">
            <CustomHeader />
            <CustomAside />

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1> Cadastrar Item </h1>
                    </Grid>

                    <Grid item xs={12}>
                        <hr/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="name">Nome do Item:</label>
                        <input  placeholder="Ex: X-Salada" value={name} onChange={event => setName(event.target.value)} />
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="description">Descrição do item:</label>
                        <input  placeholder="Ex: Pão, Hamburguer, alface e maionese" value={desc} onChange={event => setDesc(event.target.value)}/>
                    </Grid>

                    <Grid item xs={12}>
                        <label htmlFor="Image">Imagem do item:</label>
                        <div className="imgPreview">
                            <input type="file"/>
                        </div>
                        
                    </Grid> 
                    
                    <Grid item xs={12}>
                        <label htmlFor="Price">Preço:</label>
                        <input  placeholder="Ex: 15,90" value={price} onChange={event => setPrice(event.target.value)}/>
                    </Grid>

                    <Grid item xs={12}>
                        <CustomButton content="Cadastrar Item"/>
                    </Grid>

                </Grid>
            </form>


        </div>
    );
}

export default AddItem;