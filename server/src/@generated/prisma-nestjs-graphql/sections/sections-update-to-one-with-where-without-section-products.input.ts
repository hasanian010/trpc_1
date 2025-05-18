import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';
import { Type } from 'class-transformer';
import { SectionsUpdateWithoutSectionProductsInput } from './sections-update-without-section-products.input';

@InputType()
export class SectionsUpdateToOneWithWhereWithoutSectionProductsInput {

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;

    @Field(() => SectionsUpdateWithoutSectionProductsInput, {nullable:false})
    @Type(() => SectionsUpdateWithoutSectionProductsInput)
    data!: SectionsUpdateWithoutSectionProductsInput;
}
