import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';
import { PointsCreateWithoutUserInput } from './points-create-without-user.input';

@InputType()
export class PointsCreateOrConnectWithoutUserInput {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => PointsCreateWithoutUserInput, {nullable:false})
    @Type(() => PointsCreateWithoutUserInput)
    create!: PointsCreateWithoutUserInput;
}
