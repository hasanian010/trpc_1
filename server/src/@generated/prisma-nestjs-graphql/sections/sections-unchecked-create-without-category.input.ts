import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductUncheckedCreateNestedManyWithoutSectionInput } from '../section-product/section-product-unchecked-create-nested-many-without-section.input';

@InputType()
export class SectionsUncheckedCreateWithoutCategoryInput {

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

    @Field(() => SectionProductUncheckedCreateNestedManyWithoutSectionInput, {nullable:true})
    sectionProducts?: SectionProductUncheckedCreateNestedManyWithoutSectionInput;
}
