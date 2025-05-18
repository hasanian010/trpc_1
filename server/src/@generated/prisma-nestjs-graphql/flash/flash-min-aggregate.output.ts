import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlashMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    thumb?: string;

    @Field(() => Date, {nullable:true})
    start?: Date | string;

    @Field(() => Date, {nullable:true})
    expires?: Date | string;

    @Field(() => String, {nullable:true})
    discount?: string;

    @Field(() => String, {nullable:true})
    discountUnit?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
