import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashWhereInput } from './flash-where.input';
import { Type } from 'class-transformer';
import { FlashOrderByWithRelationInput } from './flash-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlashCountAggregateInput } from './flash-count-aggregate.input';
import { FlashMinAggregateInput } from './flash-min-aggregate.input';
import { FlashMaxAggregateInput } from './flash-max-aggregate.input';

@ArgsType()
export class FlashAggregateArgs {

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;

    @Field(() => [FlashOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FlashOrderByWithRelationInput>;

    @Field(() => FlashWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FlashCountAggregateInput, {nullable:true})
    _count?: FlashCountAggregateInput;

    @Field(() => FlashMinAggregateInput, {nullable:true})
    _min?: FlashMinAggregateInput;

    @Field(() => FlashMaxAggregateInput, {nullable:true})
    _max?: FlashMaxAggregateInput;
}
