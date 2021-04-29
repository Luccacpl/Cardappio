import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams,  } from "react-router-dom";

import api from "../../services/api";

import Aside from "../../components/Aside/Aside";
import SubAside from "../../components/SubAside/SubAside";
import Cards from "../../components/Cards/Cards";
import Container from "../../components/Container/Container";
import { Grid } from "../../components/Grid/style";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Logo from "../../public/icons/logo-bk-white.svg";
import Food from "../../public/icons/fast-food-outline.svg";
import Button from "../../components/Button/Button";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { ChangeEventHandler } from "react";
import { Input } from "components/Input/Input";
import { DragFileArea } from "./style";
import { Add } from "react-ionicons";
import Dropzone from "react-dropzone";
import Loader from "components/Loader";

import { LiMenu } from "../../components/SubAside/style";
import { TrashOutline, CreateOutline } from "react-ionicons";

interface ICategory {
  name: string;
  id: number;
  items: IItem[];
}

interface IItem {
  name: string;
  id: number;
  desc: string;
  imageurl: string;
  avaible: boolean;
  price: number;
}

interface IShowModal {
  isActive: boolean;
  id: number;
  name: string;
}


function Item() {

  function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  const history = useHistory()
  const params = useParams()

  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState<IShowModal>({ id: 0, isActive: false, name: '' });

  const [name, setName] = useState("");
  const [nameItem, setNameItem] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [items, setItems] = useState<IItem[]>([]);

  const [refresh, setRefresh] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [step, setStep] = useState(0);

  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState<IItem[]>([]);

  const [resposta, setResposta] = useState({})

  const onSearch = (e: string) => {
    const searchText = e.toLowerCase();
    const newSearch = items.filter(({ name, desc }) =>
      name?.toLowerCase().includes(searchText) ||
      desc?.toLowerCase().includes(searchText)
    );
    setFilteredItems(newSearch);
    setSearch(e);
  };

  const listItems = search === "" ? items : filteredItems;

  const isUserAuthenticated = () =>
    localStorage.getItem("TOKEN") === null && history.push("/");

  const getTokenFromStorage = (): string =>
    localStorage.getItem("TOKEN") as string;

  async function handleDelete(id: number) {
    try {
      await api.delete("/item/" + id, {
        headers: {
          authorization: getTokenFromStorage(),
        },
      });
      setRefresh((chave) => chave + 1);
      console.log(id);
    } catch (error) {
      return alert("ocorreu algum erro");
    }

    setOpen(true);
  }

  async function handleSubmit(event: ChangeEventHandler<HTMLInputElement>) {
    if (name === "") {
      return alert("Complete o campo corretamente!");
    } else {
      setName('')
      try {
        await api.post(
          "category",
          { name },
          {
            headers: {
              authorization: getTokenFromStorage(),
            },
          },

        );

        history.push("/cardapio");

        setRefresh((chave) => chave + 1);

        setShowModal(false);
      } catch (error) {
        return alert("Erro ao tentar cadastrar Categoria");
      }
    }
  }

  async function goToCategory(category: ICategory) {
    try {
      const response = await api.get(`category/${category.id}`, {
        headers: {
          authorization: getTokenFromStorage(),
        },
      });     
      console.log(response.data)
      localStorage.setItem('CATEGORYID', response.data.id)
    } catch (error) {
      return alert("ocorreu algum erro");
    }
    history.push('cardapio/' + category.id)
  }
  

  // async function getCategory(id: number) {
  //   try {
  //     api
  //       .get<ICategory[]>(`/category/${id}`, {
  //         headers: {
  //           authorization: getTokenFromStorage(),
  //         },
  //       })
  //       .then((response) => {
  //         setShowLoader(false);
  //         setCategories(response.data);
  //         console.log(response.data);
  //       });
  //   } catch (error) {
  //     return alert("ocorreu algum erro");
  //   }
  // }
  

  async function handleDeleteCategory(id: number) {
    try {
      await api.delete("category/" + id, {
        headers: {
          authorization: getTokenFromStorage(),
        },
      });
      setRefresh((chave) => chave + 1);
      console.log(id);
    } catch (error) {
      return alert("ocorreu algum erro");
    }
    setOpen(true);
  }

  async function handleEditCategory(category: ICategory) {
    try {
      await api.get("category/" + category.id, {
        headers: {
          authorization: getTokenFromStorage(),
        },
      });
    } catch (error) {
      return alert("ocorreu algum erro");
    }
    console.log(category.id);

    console.log(category.name);

    setName(category.name);

    setShowModalEdit({ id: category.id, isActive: true, name: category.name });
  }

  async function handleSubmitEdit(category: ICategory, id: number, name: string) {
    if (name === "") {
      return alert("Complete o campo corretamente!");
    } else {
      try {
        console.log('id: ', id);
        await api.put(
          "category/" + id,
          { name },
          {
            headers: {
              authorization: getTokenFromStorage(),
            },
          }
        );

        history.push("/cardapio");

        setRefresh((chave) => chave + 1);

        setShowModalEdit({ id: category.id, isActive: false, name: category.name });
      } catch (error) {
        return alert("Erro ao tentar cadastrar Categoria");
      }
    }
  }

  function newCategoryButton() {
    setName('');
    setShowModal(true)
  }

  function closeModal() {
    setShowModalCreate(false);
    setStep(0);
    setDescription("");
    setNameItem("");
    setPrice("");
  }

  function GetApi() {
    setShowLoader(true);
    try {
      api
        .get<ICategory[]>("/category", {
          headers: {
            authorization: getTokenFromStorage(),
          },
        })
        .then((response) => {
          setShowLoader(false);
          setCategories(response.data);
          console.log(response.data);
        });
    } catch (error) {
      return alert("ocorreu algum erro");
    }
  }

  useEffect(() => {
    isUserAuthenticated();
  }, []);

  useEffect(() => {
    GetApi();
    setName("");
  }, [refresh]);

  useEffect(() => {
    console.log(params)
  }, [params])

 

  return (
    <Grid>
      <Aside />
      <SubAside
        title="Categorias"
        clicked={() => newCategoryButton()}
        addButtonText="+ Adicionar nova categoria"
        items={categories}
      >
        {categories.map(category => (
          <div key={category.id}>
            <LiMenu onClick={() => goToCategory(category)}>
              <TrashOutline
                color="white"
                width="3rem"
                height="1.5rem"
                onClick={() => handleDeleteCategory(category.id)}
              />
              <CreateOutline
                color="white"
                width="3rem"
                height="1.5rem"
                onClick={() => handleEditCategory(category)}
              />
              {category.name}
            </LiMenu>
            {showModalEdit.isActive && (
              <Modal
                title={`Vamos editar a Categoria ${showModalEdit.name}`}
                ButtonTitle="Adicionar"
                text="Por favor, preencha os campos abaixo, para prosseguirmos no processo de cadastro."
                change={(event) => setName(event.target.value)}
                closeClicked={() => setShowModalEdit({ id: category.id, isActive: false, name: category.name })}
              >
                <Input
                  width="55%"
                  marginTop="20px"
                  placeholder="Digite o nome da categoria"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Button
                  content="Editar Categoria"
                  width="25%"
                  height="2.25rem"
                  marginTop="28px"
                  clicked={() => handleSubmitEdit(category, showModalEdit.id, showModalEdit.name)}
                />
              </Modal>
            )}
          </div>
        ))}
      </SubAside>
      <Container height="100%" padding="0px 0px 0px 0px" flexDirection="column">
        <Header
          title="Todos os seus pratos"
          subtitle="Categoria:"
          addButton="Adicionar novo prato"
          src={Food}
          logo={Logo}
          placeholder="Digite o nome de um item"
          clickedAdd={() => setShowModalCreate(true)}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        <Container display="inline-flex" justifyContent="flex-start">
          {categories.map((category) => (
            category.items.map((item) => (
              <Cards
              name={item.name}
              desc={item.desc}
              price={Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
              src={item.imageurl}
              TrashClicked={() => handleDelete(item.id)}
            />
            ))
          ))}
        </Container>
      </Container>
      {showModal && (
        <Modal
          title="Vamos adicionar uma nova categoria!"
          ButtonTitle="Adicionar"
          text="Por favor, preencha os campos abaixo, para prosseguirmos no processo de cadastro."
          change={(event) => setName(event.target.value)}
          closeClicked={() => setShowModal(false)}
        >
          <Input
            width="55%"
            marginTop="20px"
            placeholder="Digite o nome da categoria"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button
            content="Adicionar Categoria"
            width="25%"
            height="2.25rem"
            marginTop="28px"
            clicked={handleSubmit}
          />
        </Modal>
      )}

      {showLoader && <Loader />}

      {showModalCreate && (
        <Modal
          title="Vamos adicionar um novo item!"
          ButtonTitle="Adicionar"
          text={
            step === 0
              ? "Por favor, preencha os campos abaixo, para prosseguirmos no processo de cadastro."
              : "Adicione uma foto para o item"
          }
          change={(event) => setName(event.target.value)}
          closeClicked={closeModal}
        >
          {step === 0 && (
            <>
              <Input
                width="55%"
                marginTop="20px"
                placeholder="Digite o nome do item"
                value={nameItem}
                onChange={(event) => setNameItem(event.target.value)}
              />
              <Input
                width="55%"
                marginTop="20px"
                placeholder="Digite sobre o item"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <Input
                width="55%"
                marginTop="20px"
                placeholder="Digite o preço do item"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <Button
                content="Avançar"
                width="25%"
                height="2.25rem"
                marginTop="28px"
                clicked={() => setStep(step + 1)}
              />
            </>
          )}
          {step === 1 && (
            <>
              <Dropzone>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <DragFileArea
                      margin="24px 0 0 0"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Add color="#7A7A7A" width="36px" height="36px" />
                      <input {...getInputProps()} />
                    </DragFileArea>
                  </div>
                )}
              </Dropzone>

              <Button
                content="Adicionar Categoria"
                width="25%"
                height="2.25rem"
                marginTop="28px"
                clicked={handleSubmit}
              />
            </>
          )}
        </Modal>
      )}
    </Grid>
  );
}

export default Item;
