import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategory1612485815538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'tb_categories',
            columns:[
                {
                    name:'category_id',
                    type:'integer',
                    isGenerated:true,
                    isPrimary:true,
                    generationStrategy:"increment"
                },
                {
                    name:'category_name',
                    type:'varchar',
                    length:'100'
                },
                {
                    name:'restaurant_id',
                    type:'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'categoryRestaurant',
                    columnNames: ['restaurant_id'],
                    referencedTableName: 'tb_restaurants',
                    referencedColumnNames: ['restaurant_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_categories');
    }

}
