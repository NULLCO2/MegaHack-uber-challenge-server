import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddPlaceIdFieldToBikes1605140779868 implements MigrationInterface {
  private tableColumn = new TableColumn({
    name: 'place_id',
    type: 'integer',
    isNullable: true,
  });

  private tableForeignKey = new TableForeignKey({
    name: 'BikePlace',
    columnNames: ['place_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'places',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('bikes', this.tableColumn);

    await queryRunner.createForeignKey('bikes', this.tableForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('bikes', this.tableForeignKey);

    await queryRunner.dropColumn('bikes', this.tableColumn);
  }
}
