import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategory1612485815538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'categories',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isGenerated:true,
                    isPrimary:true,
                    generationStrategy:"increment"
                },
                {
                    name:'name',
                    type:'varchar',
                    length:'100'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
