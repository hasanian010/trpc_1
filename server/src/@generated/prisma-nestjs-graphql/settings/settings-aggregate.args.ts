import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';
import { Type } from 'class-transformer';
import { SettingsOrderByWithRelationInput } from './settings-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettingsCountAggregateInput } from './settings-count-aggregate.input';
import { SettingsMinAggregateInput } from './settings-min-aggregate.input';
import { SettingsMaxAggregateInput } from './settings-max-aggregate.input';

@ArgsType()
export class SettingsAggregateArgs {

    @Field(() => SettingsWhereInput, {nullable:true})
    @Type(() => SettingsWhereInput)
    where?: SettingsWhereInput;

    @Field(() => [SettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettingsOrderByWithRelationInput>;

    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SettingsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SettingsCountAggregateInput, {nullable:true})
    _count?: SettingsCountAggregateInput;

    @Field(() => SettingsMinAggregateInput, {nullable:true})
    _min?: SettingsMinAggregateInput;

    @Field(() => SettingsMaxAggregateInput, {nullable:true})
    _max?: SettingsMaxAggregateInput;
}
