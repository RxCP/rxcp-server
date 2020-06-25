import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@nestjs/common';
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

export function getPaginationForEntity(
  type: Type<unknown> | string | Record<string, any>,
): typeof PaginationResponse {
  class PaginationResponseForEntity<Entity> extends PaginationResponse<Entity> {
    @ApiProperty({ type, isArray: true })
    public results: Entity[];
  }

  return PaginationResponseForEntity;
}
