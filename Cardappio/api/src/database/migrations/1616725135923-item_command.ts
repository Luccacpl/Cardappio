import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class item_command1616725135923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_item_commands",
            columns:[
                {
                    name:'item_command_id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'item_command_qtd',
                    type:'integer',
                    default:1
                },
                {
                    name:'item_id',
                    type:'integer'
                },
                {
                    name:'command_id',
                    type:'integer'
                },
                {
                    name:'item_time_confirmed',
                    type:'varchar',
                    isNullable:true
                },
                {
                    name:'item_command_status',
                    type:'integer',
                    default:0
                }
            ],
            foreignKeys:[
                {
                    name: 'itemCommandItem',
                    columnNames: ['item_id'],
                    referencedTableName: 'tb_items',
                    referencedColumnNames: ['item_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'itemCommandCommand',
                    columnNames: ['command_id'],
                    referencedTableName: 'tb_commands',
                    referencedColumnNames: ['command_id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_item_commands');
    }

}
