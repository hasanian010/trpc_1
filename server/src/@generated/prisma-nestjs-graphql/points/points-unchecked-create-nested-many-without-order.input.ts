import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsCreateWithoutOrderInput } from './points-create-without-order.input';
import { Type } from 'class-transformer';
import { PointsCreateOrConnectWithoutOrderInput } from './points-create-or-connect-without-order.input';
import { PointsCreateManyOrderInputEnvelope } from './points-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';

@InputType()
export class PointsUncheckedCreateNestedManyWithoutOrderInput {

    @Field(() => [PointsCreateWithoutOrderInput], {nullable:true})
    @Type(() => PointsCreateWithoutOrderInput)
    create?: Array<PointsCreateWithoutOrderInput>;

    @Field(() => [PointsCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => PointsCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<PointsCreateOrConnectWithoutOrderInput>;

    @Field(() => PointsCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => PointsCreateManyOrderInputEnvelope)
    createMany?: PointsCreateManyOrderInputEnvelope;

    @Field(() => [PointsWhereUniqueInput], {nullable:true})
    @Type(() => PointsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PointsWhereUniqueInput, 'id'>>;
}
