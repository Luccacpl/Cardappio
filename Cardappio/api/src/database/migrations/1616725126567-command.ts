import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class command1616725126567 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_commands",
            columns:[
                {
                    name:'command_id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'command_checkin',
                    type:'date'
                },
                {
                    name:'command_checkout',
                    type:'date',
                    isNullable:true
                },
                {
                    name:'command_total_price',
                    type:'decimal',
                    default:0
                },
                {
                    name:'table_id',
                    type:'integer'
                },
                {
                    name:'restaurant_id',
                    type:'integer'
                }
            ],
            foreignKeys:[
                {
                    name: 'commandTable',
                    columnNames: ['table_id'],
                    referencedTableName: 'tb_tables',
                    referencedColumnNames: ['table_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'commandRestaurant',
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
        await queryRunner.dropTable('tb_commands');
    }

}
