import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { Type } from 'class-transformer';
import { SectionProductCreateWithoutSectionInput } from './section-product-create-without-section.input';

@InputType()
export class SectionProductCreateOrConnectWithoutSectionInput {

    @Field(() => SectionProductWhereUniqueInput, {nullable:false})
    @Type(() => SectionProductWhereUniqueInput)
    where!: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;

    @Field(() => SectionProductCreateWithoutSectionInput, {nullable:false})
    @Type(() => SectionProductCreateWithoutSectionInput)
    create!: SectionProductCreateWithoutSectionInput;
}
