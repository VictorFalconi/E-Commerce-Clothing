import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createProduct } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import styles from './NewProduct.module.css';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    display: block;
    width: 80%;
    max-width: 500px;
    text-align: left;
`;

const Label = styled.label`

`;

const Input = styled.input`
    width: 300px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 80%;
    max-width: 500px;
`;

const Checkbox = styled.input`
    margin: 0;
`;

const CheckboxContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const Select = styled.select`
    width: 300px;
`;

const Button = styled.button`

`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const NewProduct = () => {

    const clothingSizes = ['XS', 'S', 'M', 'L', 'XL'];
    const shoeSizes = ['8 US', '8.5 US', '9 US', '9.5 US', '10 US'];
    const accesorySizes = ['12 cm', '13 cm', '14 cm', '15 cm', '16 cm'];
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sizeList, setSizeList] = useState(clothingSizes);
    const [category, setCategory] = useState('Pants');
    const [sizes, setSizes] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [model, setModel] = useState('');
    const [season, setSeason] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(['']);
    const [brand, setBrand] = useState('');

    useEffect(()=> {
        setSizes([]);
        switch(category) {
            case 'Shoes': setSizeList(shoeSizes); break;
            case 'Accesories': setSizeList(accesorySizes); break;
            default: setSizeList(clothingSizes);
        }
    }, [category]);

    return(
        <Container>
            <Title className={styles.title}>New Product</Title>
            <Form className={styles.labels}>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Name: </Label>
                    <Input className={styles.input} type='text' name='name' id='name' value={name} onChange={e => {setName(e.target.value)}}/>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Description: </Label>
                    <Input className={styles.input} type='text' name='description' id='description' value={description} onChange={e => {setDescription(e.target.value)}}/>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Model: </Label>
                    <Input className={styles.input} type='text' name='model' id='model' value={model} onChange={e => {setModel(e.target.value)}}/>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Season: </Label>
                    <Input className={styles.input} type='text' name='season' id='season' value={season} onChange={e => {setSeason(e.target.value)}}/>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Price: </Label>
                    <Input className={styles.input} type='number' name='price' id='price' value={price} onChange={e => {setPrice(parseFloat(e.target.value) || 0)}} onClick={e => {e.target.select()}}/>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Category: </Label>
                    <Select className={styles.input} name='category' id='category' value={category} onChange={e => setCategory(e.target.value)}>
                        <option value='Pants'>Pants</option>
                        <option value='Shoes'>Shoes</option>
                        <option value='T-Shirts'>T-Shirts</option>
                        <option value='Accesories'>Accesories</option>
                        <option value='Caps'>Caps</option>
                    </Select>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Sizes: </Label>
                    <CheckboxContainer>
                        {
                            sizeList.map((s, i) => {
                                return (
                                    <label key={i}>
                                        <Checkbox 
                                            type='checkbox' 
                                            checked={sizes.includes(s)}
                                            value={s} 
                                            onChange={
                                                e => {
                                                    !sizes.includes(e.target.value) 
                                                    ? setSizes([...sizes, e.target.value]) 
                                                    : setSizes(sizes.filter(s => s !== e.target.value));
                                                }
                                            }
                                        />
                                        {s}
                                    </label>
                                )
                            })
                        }
                    </CheckboxContainer>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Image: </Label>
                    <Input className={styles.input} type='text' name='image' id='image' value={image[0]} onChange={e => {setImage([e.target.value])}}/>
                </InputContainer>
                <InputContainer className={styles.propertiesBox}>
                    <Label>Brand: </Label>
                    <Input className={styles.input} type='text' name='brand' id='brand' value={brand} onChange={e => {setBrand(e.target.value)}}/>
                </InputContainer>
                <ButtonContainer>
                    <Button 
                        className={styles.savebtn}
                        onClick={async(e) => {
                            e.preventDefault();
                            if(name && description && model && season && price && !!sizes.length && image[0] && brand && category) {

                                const create = new Promise((resolve, reject) => {
                                    dispatch(createProduct({name, description, model, season, price, sizes, image, brand, category}));
                                    resolve();
                                });
                                await create.then(() => {alert('producto creado'); navigate('/');});
                            }
                            else {
                                alert('There should not be empty fields')
                            }
                        }}
                    >
                        Save
                    </Button>
                    <Button className={styles.cancelbtn} onClick={e => {e.preventDefault(); navigate('/');}}>Cancel</Button>
                </ButtonContainer>
            </Form>
        </Container>
    )
}

export default NewProduct;