import Category from '../models/Category';
import itemView from "../Views/ItemView";

export default {

    render(category: Category) {
        return {
            id: category.id,
            name: category.name,
            items: itemView.renderMany(category.items)
        };
    },
    renderMany(categories: Category[]) {
        return categories.map(category=> this.render(category));
    }
}