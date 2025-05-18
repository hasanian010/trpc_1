import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SettingsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    logo?: true;

    @Field(() => Boolean, {nullable:true})
    icon?: true;

    @Field(() => Boolean, {nullable:true})
    siteTitle?: true;

    @Field(() => Boolean, {nullable:true})
    slogan?: true;

    @Field(() => Boolean, {nullable:true})
    metaTitle?: true;

    @Field(() => Boolean, {nullable:true})
    metaDescription?: true;

    @Field(() => Boolean, {nullable:true})
    siteUrl?: true;

    @Field(() => Boolean, {nullable:true})
    ogTitle?: true;

    @Field(() => Boolean, {nullable:true})
    ogDescription?: true;

    @Field(() => Boolean, {nullable:true})
    ogImage?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    corporateOffice?: true;

    @Field(() => Boolean, {nullable:true})
    headOffice?: true;

    @Field(() => Boolean, {nullable:true})
    facebook?: true;

    @Field(() => Boolean, {nullable:true})
    instagram?: true;

    @Field(() => Boolean, {nullable:true})
    youtube?: true;

    @Field(() => Boolean, {nullable:true})
    twitter?: true;

    @Field(() => Boolean, {nullable:true})
    linkedIn?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
