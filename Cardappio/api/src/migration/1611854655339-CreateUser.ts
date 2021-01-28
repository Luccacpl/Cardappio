import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUser1611854655339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'firstname',
                    type:'varchar'
                },
                {
                    name:'lastname',
                    type:'varchar'
                },
                {
                    name:'age',
                    type:'integer'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
