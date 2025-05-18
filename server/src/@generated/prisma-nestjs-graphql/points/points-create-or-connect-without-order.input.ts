import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';
import { PointsCreateWithoutOrderInput } from './points-create-without-order.input';

@InputType()
export class PointsCreateOrConnectWithoutOrderInput {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => PointsCreateWithoutOrderInput, {nullable:false})
    @Type(() => PointsCreateWithoutOrderInput)
    create!: PointsCreateWithoutOrderInput;
}
