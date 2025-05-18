import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FlashCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    thumb?: string;

    @Field(() => Date, {nullable:false})
    start!: Date | string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
