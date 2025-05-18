import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Type } from 'class-transformer';
import { IncomeCreateWithoutOrderInput } from './income-create-without-order.input';

@InputType()
export class IncomeCreateOrConnectWithoutOrderInput {

    @Field(() => IncomeWhereUniqueInput, {nullable:false})
    @Type(() => IncomeWhereUniqueInput)
    where!: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => IncomeCreateWithoutOrderInput, {nullable:false})
    @Type(() => IncomeCreateWithoutOrderInput)
    create!: IncomeCreateWithoutOrderInput;
}
