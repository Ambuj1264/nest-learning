"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YourMigrationName1714717036746 = void 0;
class YourMigrationName1714717036746 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" To "firstName"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstName" To "name"`);
    }
}
exports.YourMigrationName1714717036746 = YourMigrationName1714717036746;
//# sourceMappingURL=1714717036746-your_migration_name.js.map