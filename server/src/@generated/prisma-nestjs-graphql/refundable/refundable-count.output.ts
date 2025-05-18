import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RefundableCount {

    @Field(() => Int, {nullable:false})
    variations?: number;

    @Field(() => Int, {nullable:false})
    refunds?: number;
}
