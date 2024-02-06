import React, { useState } from 'react'
import './Dashboard.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('basketball');
  const [pictures, setpictures] = useState()
  const [input, setinput] = useState({
    // firstname: "",
    // lastname: "",
    // email: "",
    // role:"",
    // password: "",
    name: "",
    price: "",
    desc: "",
    tag: "",
    stock: "",
    color1: "",
    color2: "",
    images: []
  })
  const getdata = (e) => {
    // console.log(e.target.name);
    const { value, name } = e.target;
    setinput(() => {
      return { ...input, [name]: value }
    })
  }

  const handleadminform = async (e) => {
    e.preventDefault();
    // const data = { ...input, category: category, pictures: pictures }
    // console.log("pictures",data.images)
    // console.log("mydata", data)
    const formdata = new FormData();
    formdata.append('name', input.name)
    formdata.append('price', input.price)
    formdata.append('desc', input.desc)
    formdata.append('tag', input.tag)
    formdata.append('color1', input.color1)
    formdata.append('color2', input.color2)
    formdata.append('stock', input.stock)
    formdata.append('category', category)
    for (let i = 0; i < pictures.length; i++) {
      formdata.append('images', pictures[i])
    }
    // console.log(formdata.images)
    try {
      // const response2 = await axios.post("http://localhost:5000/upload", pictures)
      const response = await axios.post("http://localhost:5000/dashboard", formdata)
      if (response.status == 201) {
        console.log(response.data)
        alert("data added successfully")
      }
      else {
        console.log("else of try body")
      }
    } catch (e) {
      console.log(e, "error in form submit")
    }
  }

  return (
    <>
      <form action="" onSubmit={handleadminform} enctype="multipart/form-data">
        <div className="adminpage">
          <div className="dashboard">
            Admin Dashboard
          </div>
          <div className="productname">
            <div className="info-txt">Product Name</div>
            <input type="text" required name='name' value={input.name} onChange={getdata} />
          </div>
          <div className="productprice">
            <div className="info-txt">Product Price</div>
            <input type="number" required name='price' value={input.price} onChange={getdata} />
          </div>
          <div className="productdesc">
            <div className="info-txt">Product Description</div>
            <input type="text" required name='desc' onChange={getdata} value={input.desc} />
          </div>
          <div className="productcategory">
            <label for="role">Choose a category:</label>

            <select name="category" id="category" onChange={(e) => {
              setCategory(e.target.value);
              console.log(category);
            }}>
              <option value="basketball">Basketball</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>
          <div className="tag">
            <div className="info-txt">Product Tag</div>
            <input type="text" required name='tag' onChange={getdata} value={input.tag} />
          </div>
          <div className="color1">
            <div className="info-txt">Product Color 1</div>
            <input type="text" required name='color1' onChange={getdata} value={input.color1} />
          </div>
          <div className="color2">
            <div className="info-txt">Product Color 2</div>
            <input type="text" required name='color2' onChange={getdata} value={input.color2} />
          </div>

          <div className="productstock">
            <div className="info-txt">Amount of stock</div>
            <input type='number' required name='stock' onChange={getdata} value={input.stock} />
          </div>
          <div className="productstock">
            <div className="info-txt">Image 1</div>
            <input type='file' required name='images' multiple onChange={(e) => (setpictures(e.target.files))} />
          </div>
          {/* <div className="productstock">
            <div className="info-txt">Image 2</div>
            <input type='file' required name='img2' onChange={getdata} value={input.img2} />
          </div>
          <div className="productstock">
            <div className="info-txt">Image 3</div>
            <input type='file' required name='img3' onChange={getdata} value={input.img3} />
          </div>
          <div className="productstock">
            <div className="info-txt">Image 4</div>
            <input type='file' required name='img4' onChange={getdata} value={input.img4} />
          </div> */}
          <div className="btn">
            <button type="submit">Submit</button>
          </div>


        </div>
      </form >
    </>
  )
}

export default Dashboard