import { MigrationInterface, QueryRunner } from "typeorm";

export class First1695641007630 implements MigrationInterface {
    name = 'First1695641007630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drinks" DROP COLUMN "totaldrinks"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drinks" ADD "totaldrinks" integer NOT NULL`);
    }

}
