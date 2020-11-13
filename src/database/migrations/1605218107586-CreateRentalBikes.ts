import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateRentalBikes1605218107586 implements MigrationInterface {
  private table = new Table({
    name: 'rental_bikes',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'bike_id',
        type: 'integer',
        isNullable: true,
      },
      {
        name: 'user_id',
        type: 'integer',
        isNullable: true,
      },
      {
        name: 'start',
        type: 'timestamp',
      },
      {
        name: 'end',
        type: 'timestamp',
        isNullable: true,
      },
      {
        name: 'start_latitude',
        type: 'decimal',
        scale: 10,
        precision: 2,
      },
      {
        name: 'start_longitude',
        type: 'decimal',
        scale: 10,
        precision: 2,
      },
      {
        name: 'end_latitude',
        type: 'decimal',
        scale: 10,
        precision: 2,
        isNullable: true,
      },
      {
        name: 'end_longitude',
        type: 'decimal',
        scale: 10,
        precision: 2,
        isNullable: true,
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

  private bikeForeignKey = new TableForeignKey({
    name: 'BikeRenalBike',
    columnNames: ['bike_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'bikes',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });

  private userForeignKey = new TableForeignKey({
    name: 'UserRentalBike',
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'users',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);

    await queryRunner.createForeignKeys('rental_bikes', [
      this.bikeForeignKey,
      this.userForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys('rental_bikes', [
      this.bikeForeignKey,
      this.userForeignKey,
    ]);

    await queryRunner.dropTable(this.table);
  }
}
