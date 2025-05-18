import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateNestedOneWithoutSectionProductsInput } from '../sections/sections-create-nested-one-without-section-products.input';

@InputType()
export class SectionProductCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SectionsCreateNestedOneWithoutSectionProductsInput, {nullable:false})
    section!: SectionsCreateNestedOneWithoutSectionProductsInput;
}
