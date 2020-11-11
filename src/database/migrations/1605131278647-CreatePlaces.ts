import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlaces1605131278647 implements MigrationInterface {
  private table = new Table({
    name: 'places',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'max_bikes',
        type: 'integer',
      },
      {
        name: 'number_bikes_available',
        type: 'integer',
      },
      {
        name: 'latitude',
        type: 'decimal',
        scale: 10,
        precision: 2,
      },
      {
        name: 'longitude',
        type: 'decimal',
        scale: 10,
        precision: 2,
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
