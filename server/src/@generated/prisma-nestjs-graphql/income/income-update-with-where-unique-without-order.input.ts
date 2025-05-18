import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Type } from 'class-transformer';
import { IncomeUpdateWithoutOrderInput } from './income-update-without-order.input';

@InputType()
export class IncomeUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => IncomeWhereUniqueInput, {nullable:false})
    @Type(() => IncomeWhereUniqueInput)
    where!: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => IncomeUpdateWithoutOrderInput, {nullable:false})
    @Type(() => IncomeUpdateWithoutOrderInput)
    data!: IncomeUpdateWithoutOrderInput;
}
