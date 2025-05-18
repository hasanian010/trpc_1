import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { Type } from 'class-transformer';
import { SectionProductUpdateWithoutSectionInput } from './section-product-update-without-section.input';
import { SectionProductCreateWithoutSectionInput } from './section-product-create-without-section.input';

@InputType()
export class SectionProductUpsertWithWhereUniqueWithoutSectionInput {

    @Field(() => SectionProductWhereUniqueInput, {nullable:false})
    @Type(() => SectionProductWhereUniqueInput)
    where!: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;

    @Field(() => SectionProductUpdateWithoutSectionInput, {nullable:false})
    @Type(() => SectionProductUpdateWithoutSectionInput)
    update!: SectionProductUpdateWithoutSectionInput;

    @Field(() => SectionProductCreateWithoutSectionInput, {nullable:false})
    @Type(() => SectionProductCreateWithoutSectionInput)
    create!: SectionProductCreateWithoutSectionInput;
}
