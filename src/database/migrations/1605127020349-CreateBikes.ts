import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBikes1605127020349 implements MigrationInterface {
  private table = new Table({
    name: 'bikes',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'model',
        type: 'varchar',
      },
      {
        name: 'cost',
        type: 'integer',
      },
      {
        name: 'availability',
        type: 'boolean',
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
