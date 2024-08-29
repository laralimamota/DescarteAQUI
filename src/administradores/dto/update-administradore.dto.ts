import { PartialType } from '@nestjs/swagger';
import { CreateAdministradoreDto } from './create-administradore.dto';

export class UpdateAdministradoreDto extends PartialType(
  CreateAdministradoreDto,
) {}
