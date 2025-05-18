import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsCreateWithoutUserInput } from './points-create-without-user.input';
import { Type } from 'class-transformer';
import { PointsCreateOrConnectWithoutUserInput } from './points-create-or-connect-without-user.input';
import { PointsUpsertWithWhereUniqueWithoutUserInput } from './points-upsert-with-where-unique-without-user.input';
import { PointsCreateManyUserInputEnvelope } from './points-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { PointsUpdateWithWhereUniqueWithoutUserInput } from './points-update-with-where-unique-without-user.input';
import { PointsUpdateManyWithWhereWithoutUserInput } from './points-update-many-with-where-without-user.input';
import { PointsScalarWhereInput } from './points-scalar-where.input';

@InputType()
export class PointsUpdateManyWithoutUserNestedInput {

    @Field(() => [PointsCreateWithoutUserInput], {nullable:true})
    @Type(() => PointsCreateWithoutUserInput)
    create?: Array<PointsCreateWithoutUserInput>;

    @Field(() => [PointsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PointsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PointsCreateOrConnectWithoutUserInput>;

    @Field(() => [PointsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PointsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PointsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PointsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PointsCreateManyUserInputEnvelope)
    createMany?: PointsCreateManyUserInputEnvelope;

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

    @Field(() => [PointsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PointsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PointsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PointsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PointsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PointsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PointsScalarWhereInput], {nullable:true})
    @Type(() => PointsScalarWhereInput)
    deleteMany?: Array<PointsScalarWhereInput>;
}
