import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlatformWhereUniqueInput } from './platform-where-unique.input';
import { Type } from 'class-transformer';
import { PlatformCreateInput } from './platform-create.input';
import { PlatformUpdateInput } from './platform-update.input';

@ArgsType()
export class UpsertOnePlatformArgs {

    @Field(() => PlatformWhereUniqueInput, {nullable:false})
    @Type(() => PlatformWhereUniqueInput)
    where!: Prisma.AtLeast<PlatformWhereUniqueInput, 'id'>;

    @Field(() => PlatformCreateInput, {nullable:false})
    @Type(() => PlatformCreateInput)
    create!: PlatformCreateInput;

    @Field(() => PlatformUpdateInput, {nullable:false})
    @Type(() => PlatformUpdateInput)
    update!: PlatformUpdateInput;
}
