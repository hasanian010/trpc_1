import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Type } from 'class-transformer';
import { IncomeCreateInput } from './income-create.input';
import { IncomeUpdateInput } from './income-update.input';

@ArgsType()
export class UpsertOneIncomeArgs {

    @Field(() => IncomeWhereUniqueInput, {nullable:false})
    @Type(() => IncomeWhereUniqueInput)
    where!: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => IncomeCreateInput, {nullable:false})
    @Type(() => IncomeCreateInput)
    create!: IncomeCreateInput;

    @Field(() => IncomeUpdateInput, {nullable:false})
    @Type(() => IncomeUpdateInput)
    update!: IncomeUpdateInput;
}
