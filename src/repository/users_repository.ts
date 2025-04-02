import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { AbstractRepository } from 'src/shared/repository_abstract';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserRepository extends AbstractRepository<UserEntity> {
  constructor(protected readonly entityManager: EntityManager) {
    super(UserEntity, entityManager);
  }
}
