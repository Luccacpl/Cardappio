import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItem1612485824406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'items',
            columns:[
                {
                    name:'item_id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    unsigned:true,
                    generationStrategy:"increment"
                },
                {
                    name:'item_name',
                    type:'varchar',
                    length:'100',
                },
                {
                    name:'item_desc',
                    type:'varchar',
                    length:'100',
                },
                {
                    name:'item_imageurl',
                    type:'varchar',
                    length:'300'
                },
                {
                    name:'item_available',
                    type:'boolean',
                    default:true
                },
                {
                    name:'item_price',
                    type:'decimal'
                },
                {
                    name:'category_id',
                    type:'integer'
                }

            ],
            foreignKeys: [
                {
                    name: 'itemCategory',
                    columnNames: ['category_id'],
                    referencedTableName: 'categories',
                    referencedColumnNames: ['category_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items')
    }

}
