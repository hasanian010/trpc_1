import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueValuesArgs {

    @Field(() => ValuesWhereUniqueInput, {nullable:false})
    @Type(() => ValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>;
}
