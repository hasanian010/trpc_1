import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Type } from 'class-transformer';
import { PointsUpdateWithoutOrderInput } from './points-update-without-order.input';

@InputType()
export class PointsUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => PointsWhereUniqueInput, {nullable:false})
    @Type(() => PointsWhereUniqueInput)
    where!: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => PointsUpdateWithoutOrderInput, {nullable:false})
    @Type(() => PointsUpdateWithoutOrderInput)
    data!: PointsUpdateWithoutOrderInput;
}
