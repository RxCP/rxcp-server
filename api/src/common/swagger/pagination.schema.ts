import { ApiProperty } from '@nestjs/swagger';
import { PaginationResponseInterface } from '../interfaces/pagination.interface';

export class PaginationResponse<Entity>
  implements PaginationResponseInterface<Entity> {
  @ApiProperty({ type: Object, isArray: true })
  results: Array<Entity>;

  @ApiProperty()
  page: number;

  @ApiProperty()
  perPage: number;

  @ApiProperty()
  totalCount: number;
}

type Entity = Function;

export function getPaginationForEntity(
  type: Entity,
): typeof PaginationResponse {
  class PaginationResponseForEntity<Entity> extends PaginationResponse<Entity> {
    @ApiProperty({ type, isArray: true })
    public results: Entity[];
  }

  return PaginationResponseForEntity;
}
