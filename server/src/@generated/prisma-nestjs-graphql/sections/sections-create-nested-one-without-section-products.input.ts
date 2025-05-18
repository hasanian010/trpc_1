import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutSectionProductsInput } from './sections-create-without-section-products.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutSectionProductsInput } from './sections-create-or-connect-without-section-products.input';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';

@InputType()
export class SectionsCreateNestedOneWithoutSectionProductsInput {

    @Field(() => SectionsCreateWithoutSectionProductsInput, {nullable:true})
    @Type(() => SectionsCreateWithoutSectionProductsInput)
    create?: SectionsCreateWithoutSectionProductsInput;

    @Field(() => SectionsCreateOrConnectWithoutSectionProductsInput, {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutSectionProductsInput)
    connectOrCreate?: SectionsCreateOrConnectWithoutSectionProductsInput;

    @Field(() => SectionsWhereUniqueInput, {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;
}
