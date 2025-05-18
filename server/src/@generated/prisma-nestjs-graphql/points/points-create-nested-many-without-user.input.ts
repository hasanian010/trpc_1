import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsCreateWithoutUserInput } from './points-create-without-user.input';
import { Type } from 'class-transformer';
import { PointsCreateOrConnectWithoutUserInput } from './points-create-or-connect-without-user.input';
import { PointsCreateManyUserInputEnvelope } from './points-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';

@InputType()
export class PointsCreateNestedManyWithoutUserInput {

    @Field(() => [PointsCreateWithoutUserInput], {nullable:true})
    @Type(() => PointsCreateWithoutUserInput)
    create?: Array<PointsCreateWithoutUserInput>;

    @Field(() => [PointsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PointsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PointsCreateOrConnectWithoutUserInput>;

    @Field(() => PointsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PointsCreateManyUserInputEnvelope)
    createMany?: PointsCreateManyUserInputEnvelope;

    @Field(() => [PointsWhereUniqueInput], {nullable:true})
    @Type(() => PointsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PointsWhereUniqueInput, 'id'>>;
}
