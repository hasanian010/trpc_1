import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeUpdateInput } from './income-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';

@ArgsType()
export class UpdateOneIncomeArgs {

    @Field(() => IncomeUpdateInput, {nullable:false})
    @Type(() => IncomeUpdateInput)
    data!: IncomeUpdateInput;

    @Field(() => IncomeWhereUniqueInput, {nullable:false})
    @Type(() => IncomeWhereUniqueInput)
    where!: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;
}
