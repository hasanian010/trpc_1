import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';
import { PointsUpdateWithoutUserInput } from './points-update-without-user.input';
import { PointsCreateWithoutUserInput } from './points-create-without-user.input';

@InputType()
export class PointsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => PointsUpdateWithoutUserInput, {nullable:false})
    @Type(() => PointsUpdateWithoutUserInput)
    update!: PointsUpdateWithoutUserInput;

    @Field(() => PointsCreateWithoutUserInput, {nullable:false})
    @Type(() => PointsCreateWithoutUserInput)
    create!: PointsCreateWithoutUserInput;
}
