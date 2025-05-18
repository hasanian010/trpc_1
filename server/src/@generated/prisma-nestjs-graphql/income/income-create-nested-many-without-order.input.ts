import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeCreateWithoutOrderInput } from './income-create-without-order.input';
import { Type } from 'class-transformer';
import { IncomeCreateOrConnectWithoutOrderInput } from './income-create-or-connect-without-order.input';
import { IncomeCreateManyOrderInputEnvelope } from './income-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';

@InputType()
export class IncomeCreateNestedManyWithoutOrderInput {

    @Field(() => [IncomeCreateWithoutOrderInput], {nullable:true})
    @Type(() => IncomeCreateWithoutOrderInput)
    create?: Array<IncomeCreateWithoutOrderInput>;

    @Field(() => [IncomeCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => IncomeCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<IncomeCreateOrConnectWithoutOrderInput>;

    @Field(() => IncomeCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => IncomeCreateManyOrderInputEnvelope)
    createMany?: IncomeCreateManyOrderInputEnvelope;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;
}
