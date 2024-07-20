import {useState , useEffect} from "react";
import SpecificProduct from "./SpecificProduct";
export default function  Productpage(){

const [ products , setProducts]=useState( []
  )
const companies=["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories=["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]

useEffect(()=>{    const f =async ()=>{
    try{
        const response =await fetch("http://localhost:3000/categories/:categoryname") ; 
console.log("yup done")
const productData = await response.json();
setProducts(productData)

    }catch(error){
console.log("error ho gya , while fetching product list from the server" , error)
    }

 
}
f();
},[])



const companiesList=companies.map(x => (
    <div className="company" key={x} onClick={() => handleCompanyClick(x)}>
       { x}
    </div>
));

const categoryList=categories.map(x => (
    <div className="category" key={x} onClick={() => handleCategoryClick(x)}>
       { x}
    </div>
));

 const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleBack = () => {
        setSelectedProduct(null);
    };


    const productCards = products.map(x => (
        <div className="product_card" key={x.productName} onClick={() => handleProductClick(x)}>
            <div className="productName">{x.productName}</div>
            <div className="price">₹{x.price}</div>
            <div className="rating">{x.rating ? `Rating: ${x.rating}` : 'No rating available'}</div>
            <div className="discount">{x.discount ? `Discount: ${x.discount}%` : 'No discount available'}</div>
            <div className="availability">{x.availability === "yes" ? "" : "Sold Out"}</div>
        </div>
    ));

    return (
        <div>


            {selectedProduct ? (
                <SpecificProduct product={selectedProduct} onBack={handleBack} />
            ) : (

<>       <div className="companyList">Select company: {companiesList}</div>
<div className="categoryList">Select company: {categoryList}</div>
                <div>
                   
                    {productCards}
                </div>
                </>               
            )}
        </div>
    );


}