import Command from "../models/Command";

export default {
    async totalPriceFinalizado(command: Command) {
        console.log('numero de items é ' + command.itemsCommand.length)
        var aux: number = 0;
        command.itemsCommand.map(items => {
            if (items.item_command_status == 3) {
                var aux2: number = +items.item.item_price
                aux += aux2
            }
        })
        return aux;
    },
    async totalPriceAdicionado(command: Command) {
        console.log('numero de items é ' + command.itemsCommand.length)
        var aux: number = 0;
        command.itemsCommand.map(items => {
            if (items.item_command_status == 0) {
                var aux2: number = +items.item.item_price
                aux += aux2
            }
        })
        return aux;
    },
    async totalPriceAdicionadoAndFinalizado(command: Command) {
        console.log('numero de items é ' + command.itemsCommand.length)
        var aux: number = 0;
        command.itemsCommand.map(items => {
            if (items.item_command_status == 0 || items.item_command_status == 3 || items.item_command_status == 2 || items.item_command_status == 1) {
                var aux2: number = +items.item.item_price
                aux += aux2
            }
        })
        return aux;
    }
}