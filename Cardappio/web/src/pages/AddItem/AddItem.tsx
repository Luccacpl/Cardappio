import React, {FormEvent, useState, ChangeEvent} from 'react';
import { useHistory } from 'react-router-dom';

import './AddItem.css';

import api from '../../services/api';
import { FiPlus } from "react-icons/fi";

import NewAside from '../../components/NewAside/NewAside';
import SubAside from '../../components/SubAside/SubAside';
import Button from '../../components/Button/Button';
import {Grid} from '../../components/Grid/style';


function AddItem() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [avaible, setAvaible] = useState(false);
    const [price, setPrice] = useState('');
    const [images, setImages] = useState<File[]>([])
    const [previewImages, setPreviewImages] = useState<string[]>([])

    function handleSelectedImages(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
          return;
        }
    
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages)
    
        const selectedImagesPreview = selectedImages.map(image => {
          return URL.createObjectURL(image)
        })
    
        setPreviewImages(selectedImagesPreview);
      }



    async function handleSubmit (event: FormEvent) {
        event.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('desc', desc);
        data.append('avaible', String(avaible));
        data.append('price', price);
        images.forEach(image =>{
            data.append('images', image)
          })

        await api.post('category', {data});

        alert('Cadastro realizado com sucesso!');
        history.push('/item');

        console.log(data);

        console.log({
            name,
            desc,
            avaible,
            price,
            images
        })
    }

    return(
        <div id="page-AddItem">
        <Grid >
            <NewAside />
            <SubAside title="Categorias" />
        </Grid>
        </div>
        
    );
}

export default AddItem;


/* <form onSubmit={handleSubmit}>
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
        <div className="images-container">
            {
                previewImages.map(image=>{
                    return (
                        <img src={image} alt={image} key={image}/>
                    )
                })
            }

<label htmlFor="image" className="new-image">
  <FiPlus size={24} color="grey" />
</label>


</div>
<input multiple onChange={handleSelectedImages} type="file" id="image"/>
        
    </Grid> 
    
    <Grid item xs={12}>
        <label htmlFor="Price">Preço:</label>
        <input  placeholder="Ex: 15,90" value={price} onChange={event => setPrice(event.target.value)}/>
    </Grid>

    <Grid item xs={12}>
        <label htmlFor="Avaible">Disponível:</label>
        <div className="button-select">
            <button type="button"
                className={avaible ? 'active' : ''}
                onClick={() => setAvaible(true)}
            >Sim</button>
            <button type="button"
                className={!avaible ? 'active' : ''}
                onClick={() => setAvaible(false)}
            >Não</button>
        </div>
    </Grid>

    <Grid item xs={12}>
        <Button ></Button>
    </Grid>

</Grid>
</form> */