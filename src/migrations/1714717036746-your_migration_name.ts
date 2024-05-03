import { MigrationInterface, QueryRunner } from 'typeorm';

export class YourMigrationName1714717036746 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Implement your migration here
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "name" To "firstName"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" RENAME COLUMN "firstName" To "name"`,
    );
  }
}
