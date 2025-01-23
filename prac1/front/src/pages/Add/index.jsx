import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../../constants/script';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';


const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  image: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
});

const Add = () => {

  const [products, setProducts] = useState([])
  const getProducts = async()=>{
    try {
      const res = await axios(`${BASE_URL}/products`)
      setProducts(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async(id)=>{
    try {
      const res = await axios.delete(`${BASE_URL}/products/${id}`)
      console.log(res);
      if(res.status === 200){
        setProducts([...products].filter((q)=>q._id!= id))
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  useEffect(() => {
    getProducts()
  }, [])
  return(

  <div style={{marginTop: '120px'}}>

<Container maxWidth="sm">
  
    <h1>Signup</h1>
    <Formik
      initialValues={{
        title: '',
        description: '',
        image: '',
        price: 0
      }}
      validationSchema={AddSchema}
      onSubmit={async (values, {resetForm}) => {
        const res = await axios.post(`${BASE_URL}/products`, values)
        resetForm()
      }}
    >
      {({ errors, touched }) => (
        <Form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}> 
          <Field name="title" />
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
          <Field name="description" />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
          <Field name="image" type="string" />
          {errors.image && touched.image ? 
          <div>{errors.image}</div> : null}
          <Field name="price" type="number" />
          {errors.price && touched.price ? 
          <div>{errors.price}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    <br />
    <hr />

    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { products.length>0 && products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
        
              <TableCell align="right"><img src={row.image} alt={row.title} style={{width: '100px'}}/></TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><button onClick={()=>{window.confirm('are u sure to delete?')
                && handleDelete(row._id)
              }}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>

  </div>
  )
};

export default Add