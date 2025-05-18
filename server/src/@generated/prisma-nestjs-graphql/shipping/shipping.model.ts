import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Shipping {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    rateInsideDhaka!: string;

    @Field(() => String, {nullable:false})
    rateOutsideDhaka!: string;

    @Field(() => String, {nullable:false})
    rateInSavar!: string;

    @Field(() => String, {nullable:false})
    estimateDelivery!: string;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
