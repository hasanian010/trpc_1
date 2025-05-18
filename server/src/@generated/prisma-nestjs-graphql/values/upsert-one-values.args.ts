import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';
import { Type } from 'class-transformer';
import { ValuesCreateInput } from './values-create.input';
import { ValuesUpdateInput } from './values-update.input';

@ArgsType()
export class UpsertOneValuesArgs {

    @Field(() => ValuesWhereUniqueInput, {nullable:false})
    @Type(() => ValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>;

    @Field(() => ValuesCreateInput, {nullable:false})
    @Type(() => ValuesCreateInput)
    create!: ValuesCreateInput;

    @Field(() => ValuesUpdateInput, {nullable:false})
    @Type(() => ValuesUpdateInput)
    update!: ValuesUpdateInput;
}
