import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Attribute } from '../attribute/attribute.model';

@ObjectType()
export class Values {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => String, {nullable:true})
    meta!: string | null;

    @Field(() => String, {nullable:false})
    attributeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Attribute, {nullable:false})
    attribute?: Attribute;
}
