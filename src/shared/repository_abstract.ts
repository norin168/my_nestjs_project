import { Injectable } from '@nestjs/common';
import { EntityManager, ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class AbstractRepository<T extends ObjectLiteral> extends Repository<T> {
  constructor(
    protected readonly entity: any,
    protected readonly entityManager: EntityManager,
  ) {
    super(entity, entityManager);
  }
}
