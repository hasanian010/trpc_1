import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsUpdateWithoutSectionProductsInput } from './sections-update-without-section-products.input';
import { Type } from 'class-transformer';
import { SectionsCreateWithoutSectionProductsInput } from './sections-create-without-section-products.input';
import { SectionsWhereInput } from './sections-where.input';

@InputType()
export class SectionsUpsertWithoutSectionProductsInput {

    @Field(() => SectionsUpdateWithoutSectionProductsInput, {nullable:false})
    @Type(() => SectionsUpdateWithoutSectionProductsInput)
    update!: SectionsUpdateWithoutSectionProductsInput;

    @Field(() => SectionsCreateWithoutSectionProductsInput, {nullable:false})
    @Type(() => SectionsCreateWithoutSectionProductsInput)
    create!: SectionsCreateWithoutSectionProductsInput;

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;
}
