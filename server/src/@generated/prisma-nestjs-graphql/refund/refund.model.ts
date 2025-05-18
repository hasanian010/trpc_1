import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Refundable } from '../refundable/refundable.model';
import { User } from '../user/user.model';

@ObjectType()
export class Refund {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    refundableId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Float, {nullable:true})
    quantity!: number | null;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Refundable, {nullable:false})
    refundable?: Refundable;

    @Field(() => User, {nullable:false})
    user?: User;
}
