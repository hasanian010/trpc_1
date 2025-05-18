import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MainCategory } from '../main-category/main-category.model';
import { SectionProduct } from '../section-product/section-product.model';
import { SectionsCount } from './sections-count.output';

@ObjectType()
export class Sections {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    publish!: boolean;

    @Field(() => String, {nullable:false})
    base!: string;

    @Field(() => String, {nullable:true})
    categoryId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => MainCategory, {nullable:true})
    category?: MainCategory | null;

    @Field(() => [SectionProduct], {nullable:true})
    sectionProducts?: Array<SectionProduct>;

    @Field(() => SectionsCount, {nullable:false})
    _count?: SectionsCount;
}
