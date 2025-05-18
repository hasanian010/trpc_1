import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateNestedOneWithoutSectionsInput } from '../main-category/main-category-create-nested-one-without-sections.input';

@InputType()
export class SectionsCreateWithoutSectionProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    publish?: boolean;

    @Field(() => String, {nullable:false})
    base!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MainCategoryCreateNestedOneWithoutSectionsInput, {nullable:true})
    category?: MainCategoryCreateNestedOneWithoutSectionsInput;
}
