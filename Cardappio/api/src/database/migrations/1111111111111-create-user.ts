import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1111111111111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tb_users",
            columns:[
                {
                    name:'user_id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'user_email',
                    type:'varchar',
                    length:'40'
                },
                {
                    name:'user_pass',
                    type:'varchar',
                    length:'100'
                },
                {
                    name:'user_name',
                    type:'varchar',
                    length:'100'
                },
                {
                    name:'user_dt_nasc',
                    type:'date'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_users');
    }

}
