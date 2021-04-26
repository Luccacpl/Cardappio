import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class table1616725098921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_tables",
            columns:[
                {
                    name:'table_id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                },
                {
                    name:'table_qrcode',
                    type:'varchar',
                    generationStrategy:'uuid',
                    default:'uuid_generate_v4()',

                },
                {
                    name:'table_number',
                    type:'integer',
                },
                {
                    name:'restaurant_id',
                    type:'integer'
                }
            ],
            foreignKeys:[
                {
                    name: 'tableRestaurant',
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
        await queryRunner.dropTable('tb_tables');
    }

}
