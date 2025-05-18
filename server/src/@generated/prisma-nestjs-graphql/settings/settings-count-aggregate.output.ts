import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SettingsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    logo!: number;

    @Field(() => Int, {nullable:false})
    icon!: number;

    @Field(() => Int, {nullable:false})
    siteTitle!: number;

    @Field(() => Int, {nullable:false})
    slogan!: number;

    @Field(() => Int, {nullable:false})
    metaTitle!: number;

    @Field(() => Int, {nullable:false})
    metaDescription!: number;

    @Field(() => Int, {nullable:false})
    metaTag!: number;

    @Field(() => Int, {nullable:false})
    siteUrl!: number;

    @Field(() => Int, {nullable:false})
    ogTitle!: number;

    @Field(() => Int, {nullable:false})
    ogDescription!: number;

    @Field(() => Int, {nullable:false})
    ogImage!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    corporateOffice!: number;

    @Field(() => Int, {nullable:false})
    headOffice!: number;

    @Field(() => Int, {nullable:false})
    facebook!: number;

    @Field(() => Int, {nullable:false})
    instagram!: number;

    @Field(() => Int, {nullable:false})
    youtube!: number;

    @Field(() => Int, {nullable:false})
    twitter!: number;

    @Field(() => Int, {nullable:false})
    linkedIn!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
