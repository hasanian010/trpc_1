import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsWhereInput } from './user-points-where.input';
import { Type } from 'class-transformer';
import { UserPointsOrderByWithRelationInput } from './user-points-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPointsScalarFieldEnum } from './user-points-scalar-field.enum';

@ArgsType()
export class FindFirstUserPointsArgs {

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;

    @Field(() => [UserPointsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserPointsOrderByWithRelationInput>;

    @Field(() => UserPointsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserPointsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserPointsScalarFieldEnum}`>;
}
