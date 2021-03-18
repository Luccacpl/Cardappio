import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class restaurant1615490790531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "restaurants",
            columns:[
                {
                    name:'restaurant_id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'restaurant_name',
                    type:'varchar'
                },
                {
                    name:'user_id',
                    type:'integer'
                }
            ],
            foreignKeys:[
                {
                    name: 'user',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['user_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('restaurants');
    }

}
