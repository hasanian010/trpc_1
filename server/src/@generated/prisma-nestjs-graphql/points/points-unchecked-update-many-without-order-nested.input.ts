import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsCreateWithoutOrderInput } from './points-create-without-order.input';
import { Type } from 'class-transformer';
import { PointsCreateOrConnectWithoutOrderInput } from './points-create-or-connect-without-order.input';
import { PointsUpsertWithWhereUniqueWithoutOrderInput } from './points-upsert-with-where-unique-without-order.input';
import { PointsCreateManyOrderInputEnvelope } from './points-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { PointsUpdateWithWhereUniqueWithoutOrderInput } from './points-update-with-where-unique-without-order.input';
import { PointsUpdateManyWithWhereWithoutOrderInput } from './points-update-many-with-where-without-order.input';
import { PointsScalarWhereInput } from './points-scalar-where.input';

@InputType()
export class PointsUncheckedUpdateManyWithoutOrderNestedInput {

    @Field(() => [PointsCreateWithoutOrderInput], {nullable:true})
    @Type(() => PointsCreateWithoutOrderInput)
    create?: Array<PointsCreateWithoutOrderInput>;

    @Field(() => [PointsCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => PointsCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<PointsCreateOrConnectWithoutOrderInput>;

    @Field(() => [PointsUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => PointsUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<PointsUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => PointsCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => PointsCreateManyOrderInputEnvelope)
    createMany?: PointsCreateManyOrderInputEnvelope;

    @Field(() => [PointsWhereUniqueInput], {nullable:true})
    @Type(() => PointsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PointsWhereUniqueInput, 'id'>>;

    @Field(() => [PointsWhereUniqueInput], {nullable:true})
    @Type(() => PointsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PointsWhereUniqueInput, 'id'>>;

    @Field(() => [PointsWhereUniqueInput], {nullable:true})
    @Type(() => PointsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PointsWhereUniqueInput, 'id'>>;

    @Field(() => [PointsWhereUniqueInput], {nullable:true})
    @Type(() => PointsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PointsWhereUniqueInput, 'id'>>;

    @Field(() => [PointsUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => PointsUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<PointsUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [PointsUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => PointsUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<PointsUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [PointsScalarWhereInput], {nullable:true})
    @Type(() => PointsScalarWhereInput)
    deleteMany?: Array<PointsScalarWhereInput>;
}
