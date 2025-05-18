import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValuesUpdateInput } from './values-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';

@ArgsType()
export class UpdateOneValuesArgs {

    @Field(() => ValuesUpdateInput, {nullable:false})
    @Type(() => ValuesUpdateInput)
    data!: ValuesUpdateInput;

    @Field(() => ValuesWhereUniqueInput, {nullable:false})
    @Type(() => ValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>;
}
