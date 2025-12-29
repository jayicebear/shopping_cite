import laptopImg from "../pictures/laptop.png";
import phoneImg from "../pictures/phone.png";
import tshirtImg from "../pictures/t-shirt.png";
import coffeeImg from "../pictures/coffee.png";
import maruImg from "../pictures/maru.png";


const products = [
  {
    id: 1,
    name: "노트북",
    category: "전자",
    price: 1200000,
    image:laptopImg
  },
  {
    id: 2,
    name: "스마트폰",
    category: "전자",
    price: 900000,
    image:phoneImg
  },
  {
    id: 3,
    name: "티셔츠",
    category: "의류",
    price: 30000,
    image:tshirtImg
  },
  {
    id: 4,
    name: "커피",
    category: "식품",
    price: 12000,
    image:coffeeImg
  },
  {
    id: 5,
    name: "마루",
    category: "식품",
    price: 10000000,
    image:maruImg
  }
];

export default products;
