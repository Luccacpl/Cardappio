import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItem1612485824406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'categories',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    unsigned:true,
                    generationStrategy:"increment"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
