import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsCreateWithoutSectionProductsInput } from './sections-create-without-section-products.input';

@InputType()
export class SectionsCreateOrConnectWithoutSectionProductsInput {

    @Field(() => SectionsWhereUniqueInput, {nullable:false})
    @Type(() => SectionsWhereUniqueInput)
    where!: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => SectionsCreateWithoutSectionProductsInput, {nullable:false})
    @Type(() => SectionsCreateWithoutSectionProductsInput)
    create!: SectionsCreateWithoutSectionProductsInput;
}
