import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1612289717920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'email',
                    type:'varchar'
                },
                {
                    name:'pass',
                    type:'varchar'
                },
                {
                    name:'firstname',
                    type:'varchar'
                }
                ,
                {
                    name:'lastname',
                    type:'varchar'
                }
                ,
                {
                    name:'dt_nasc',
                    type:'date'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
