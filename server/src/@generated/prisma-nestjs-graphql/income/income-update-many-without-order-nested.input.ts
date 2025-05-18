import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeCreateWithoutOrderInput } from './income-create-without-order.input';
import { Type } from 'class-transformer';
import { IncomeCreateOrConnectWithoutOrderInput } from './income-create-or-connect-without-order.input';
import { IncomeUpsertWithWhereUniqueWithoutOrderInput } from './income-upsert-with-where-unique-without-order.input';
import { IncomeCreateManyOrderInputEnvelope } from './income-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { IncomeUpdateWithWhereUniqueWithoutOrderInput } from './income-update-with-where-unique-without-order.input';
import { IncomeUpdateManyWithWhereWithoutOrderInput } from './income-update-many-with-where-without-order.input';
import { IncomeScalarWhereInput } from './income-scalar-where.input';

@InputType()
export class IncomeUpdateManyWithoutOrderNestedInput {

    @Field(() => [IncomeCreateWithoutOrderInput], {nullable:true})
    @Type(() => IncomeCreateWithoutOrderInput)
    create?: Array<IncomeCreateWithoutOrderInput>;

    @Field(() => [IncomeCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => IncomeCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<IncomeCreateOrConnectWithoutOrderInput>;

    @Field(() => [IncomeUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => IncomeUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<IncomeUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => IncomeCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => IncomeCreateManyOrderInputEnvelope)
    createMany?: IncomeCreateManyOrderInputEnvelope;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeWhereUniqueInput], {nullable:true})
    @Type(() => IncomeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>>;

    @Field(() => [IncomeUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => IncomeUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<IncomeUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [IncomeUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => IncomeUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<IncomeUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [IncomeScalarWhereInput], {nullable:true})
    @Type(() => IncomeScalarWhereInput)
    deleteMany?: Array<IncomeScalarWhereInput>;
}
