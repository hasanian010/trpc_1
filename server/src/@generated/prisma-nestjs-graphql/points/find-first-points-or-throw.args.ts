import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsWhereInput } from './points-where.input';
import { Type } from 'class-transformer';
import { PointsOrderByWithRelationInput } from './points-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PointsScalarFieldEnum } from './points-scalar-field.enum';

@ArgsType()
export class FindFirstPointsOrThrowArgs {

    @Field(() => PointsWhereInput, {nullable:true})
    @Type(() => PointsWhereInput)
    where?: PointsWhereInput;

    @Field(() => [PointsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PointsOrderByWithRelationInput>;

    @Field(() => PointsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PointsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PointsScalarFieldEnum}`>;
}
