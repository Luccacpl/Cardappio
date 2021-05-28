import Item from "../models/Item";

export default {

    render(item: Item) {
        return {
            id: item.item_id,
            name: item.item_name,
            desc: item.item_desc,
            imageurl: `http://localhost:3000/public/uploads/${item.item_imageurl}`,
            available: item.item_available,
            price: item.item_price,
            category_id: item.category_id
        };
    },
    renderMany(itens: Item[]) {
        return itens.map(item=> this.render(item));
    }
}