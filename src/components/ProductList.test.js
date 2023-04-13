
import ProductList from "./ProductList";
import axios from "axios";
import { render, screen } from "@testing-library/react";

jest.mock("axios");
const items = [{
    "id": "5",
    "imageUrl": "https://shop.nefco.ru/image/cache/catalog/1200x1200-500x500.jpg",
    "title": "Жидкое мыло ЗБК Купажъ №1 апельсинъ, ваниль, белый кедръ",
    "weight": "4800 мл",
    "volume": "4800 мл",
    "size": "2",
    "barcode": "НК010056691",
    "manufacturer": "ЗБК",
    "brand": "Купажъ",
    "description": "Жидкое мыло ЗБК Апельсинъ, ваниль, белый кедръ 4800 мл это формула  жидкого мыла на основе тропических масел. Нежно очищает и смягчает кожу рук, создавая ощущение полного комфорта.",
    "price": "1700",
    "typecare": [
     1
    ],
    "icon": "https://img.icons8.com/ios-glyphs/512/foundation-makeup.png"
}]
describe("get Data", () => {

  
  test("product render", async() => {
    
  
    axios.get.mockImplementationOnce(()=>Promise.resolve({data: {items}}));
    const{findAllByRole} = render(<ProductList />);
  
    expect(items).toHaveLength(1);
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`https://642a9b1000dfa3b54749b441.mockapi.io/items/undefined`);
  });
  

 
});
