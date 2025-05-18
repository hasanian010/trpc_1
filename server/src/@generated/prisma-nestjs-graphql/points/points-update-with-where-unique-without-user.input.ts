import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';
import { PointsUpdateWithoutUserInput } from './points-update-without-user.input';

@InputType()
export class PointsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => PointsUpdateWithoutUserInput, {nullable:false})
    @Type(() => PointsUpdateWithoutUserInput)
    data!: PointsUpdateWithoutUserInput;
}
