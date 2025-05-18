import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlatformUpdateInput } from './platform-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PlatformWhereUniqueInput } from './platform-where-unique.input';

@ArgsType()
export class UpdateOnePlatformArgs {

    @Field(() => PlatformUpdateInput, {nullable:false})
    @Type(() => PlatformUpdateInput)
    data!: PlatformUpdateInput;

    @Field(() => PlatformWhereUniqueInput, {nullable:false})
    @Type(() => PlatformWhereUniqueInput)
    where!: Prisma.AtLeast<PlatformWhereUniqueInput, 'id'>;
}
