import Item from "../models/Item";

export default {

    render(item: Item) {
        return {
            id: item.id,
            name: item.name,
            desc: item.desc,
            imageurl: `http://localhost:3333/public/uploads/${item.imageurl}`,
            available: item.available,
            price: item.price,
            category: item.category
        };
    },
    renderMany(itens: Item[]) {
        return itens.map(item=> this.render(item));
    }
}