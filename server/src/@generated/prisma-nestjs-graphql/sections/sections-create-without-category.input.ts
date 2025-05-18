import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateNestedManyWithoutSectionInput } from '../section-product/section-product-create-nested-many-without-section.input';

@InputType()
export class SectionsCreateWithoutCategoryInput {

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

    @Field(() => SectionProductCreateNestedManyWithoutSectionInput, {nullable:true})
    sectionProducts?: SectionProductCreateNestedManyWithoutSectionInput;
}
