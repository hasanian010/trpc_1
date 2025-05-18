import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlatformWhereUniqueInput } from './platform-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlatformOrThrowArgs {

    @Field(() => PlatformWhereUniqueInput, {nullable:false})
    @Type(() => PlatformWhereUniqueInput)
    where!: Prisma.AtLeast<PlatformWhereUniqueInput, 'id'>;
}
