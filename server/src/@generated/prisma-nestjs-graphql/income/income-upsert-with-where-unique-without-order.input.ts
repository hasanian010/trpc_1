import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Type } from 'class-transformer';
import { IncomeUpdateWithoutOrderInput } from './income-update-without-order.input';
import { IncomeCreateWithoutOrderInput } from './income-create-without-order.input';

@InputType()
export class IncomeUpsertWithWhereUniqueWithoutOrderInput {

    @Field(() => IncomeWhereUniqueInput, {nullable:false})
    @Type(() => IncomeWhereUniqueInput)
    where!: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => IncomeUpdateWithoutOrderInput, {nullable:false})
    @Type(() => IncomeUpdateWithoutOrderInput)
    update!: IncomeUpdateWithoutOrderInput;

    @Field(() => IncomeCreateWithoutOrderInput, {nullable:false})
    @Type(() => IncomeCreateWithoutOrderInput)
    create!: IncomeCreateWithoutOrderInput;
}
