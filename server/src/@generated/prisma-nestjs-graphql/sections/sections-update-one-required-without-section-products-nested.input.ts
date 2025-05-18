import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutSectionProductsInput } from './sections-create-without-section-products.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutSectionProductsInput } from './sections-create-or-connect-without-section-products.input';
import { SectionsUpsertWithoutSectionProductsInput } from './sections-upsert-without-section-products.input';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { SectionsUpdateToOneWithWhereWithoutSectionProductsInput } from './sections-update-to-one-with-where-without-section-products.input';

@InputType()
export class SectionsUpdateOneRequiredWithoutSectionProductsNestedInput {

    @Field(() => SectionsCreateWithoutSectionProductsInput, {nullable:true})
    @Type(() => SectionsCreateWithoutSectionProductsInput)
    create?: SectionsCreateWithoutSectionProductsInput;

    @Field(() => SectionsCreateOrConnectWithoutSectionProductsInput, {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutSectionProductsInput)
    connectOrCreate?: SectionsCreateOrConnectWithoutSectionProductsInput;

    @Field(() => SectionsUpsertWithoutSectionProductsInput, {nullable:true})
    @Type(() => SectionsUpsertWithoutSectionProductsInput)
    upsert?: SectionsUpsertWithoutSectionProductsInput;

    @Field(() => SectionsWhereUniqueInput, {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => SectionsUpdateToOneWithWhereWithoutSectionProductsInput, {nullable:true})
    @Type(() => SectionsUpdateToOneWithWhereWithoutSectionProductsInput)
    update?: SectionsUpdateToOneWithWhereWithoutSectionProductsInput;
}
