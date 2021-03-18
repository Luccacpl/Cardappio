import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItem1612485824406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'items',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    unsigned:true,
                    generationStrategy:"increment"
                },
                {
                    name:'name',
                    type:'varchar',
                    length:'100',
                },
                {
                    name:'desc',
                    type:'varchar',
                    length:'100',
                },
                {
                    name:'imageurl',
                    type:'varchar',
                    length:'300'
                },
                {
                    name:'available',
                    type:'boolean',
                    default:true
                },
                {
                    name:'price',
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
                    referencedColumnNames: ['id'],
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
