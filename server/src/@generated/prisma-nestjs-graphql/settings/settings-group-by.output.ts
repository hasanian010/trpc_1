import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettingsCountAggregate } from './settings-count-aggregate.output';
import { SettingsMinAggregate } from './settings-min-aggregate.output';
import { SettingsMaxAggregate } from './settings-max-aggregate.output';

@ObjectType()
export class SettingsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    siteTitle?: string;

    @Field(() => String, {nullable:true})
    slogan?: string;

    @Field(() => String, {nullable:true})
    metaTitle?: string;

    @Field(() => String, {nullable:true})
    metaDescription?: string;

    @Field(() => [String], {nullable:true})
    metaTag?: Array<string>;

    @Field(() => String, {nullable:true})
    siteUrl?: string;

    @Field(() => String, {nullable:true})
    ogTitle?: string;

    @Field(() => String, {nullable:true})
    ogDescription?: string;

    @Field(() => String, {nullable:true})
    ogImage?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    corporateOffice?: string;

    @Field(() => String, {nullable:true})
    headOffice?: string;

    @Field(() => String, {nullable:true})
    facebook?: string;

    @Field(() => String, {nullable:true})
    instagram?: string;

    @Field(() => String, {nullable:true})
    youtube?: string;

    @Field(() => String, {nullable:true})
    twitter?: string;

    @Field(() => String, {nullable:true})
    linkedIn?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SettingsCountAggregate, {nullable:true})
    _count?: SettingsCountAggregate;

    @Field(() => SettingsMinAggregate, {nullable:true})
    _min?: SettingsMinAggregate;

    @Field(() => SettingsMaxAggregate, {nullable:true})
    _max?: SettingsMaxAggregate;
}
