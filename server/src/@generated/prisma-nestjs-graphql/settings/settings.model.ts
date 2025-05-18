import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Settings {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    logo!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    siteTitle!: string | null;

    @Field(() => String, {nullable:true})
    slogan!: string | null;

    @Field(() => String, {nullable:true})
    metaTitle!: string | null;

    @Field(() => String, {nullable:true})
    metaDescription!: string | null;

    @Field(() => [String], {nullable:true})
    metaTag!: Array<string>;

    @Field(() => String, {nullable:true})
    siteUrl!: string | null;

    @Field(() => String, {nullable:true})
    ogTitle!: string | null;

    @Field(() => String, {nullable:true})
    ogDescription!: string | null;

    @Field(() => String, {nullable:true})
    ogImage!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    corporateOffice!: string | null;

    @Field(() => String, {nullable:true})
    headOffice!: string | null;

    @Field(() => String, {nullable:true})
    facebook!: string | null;

    @Field(() => String, {nullable:true})
    instagram!: string | null;

    @Field(() => String, {nullable:true})
    youtube!: string | null;

    @Field(() => String, {nullable:true})
    twitter!: string | null;

    @Field(() => String, {nullable:true})
    linkedIn!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
