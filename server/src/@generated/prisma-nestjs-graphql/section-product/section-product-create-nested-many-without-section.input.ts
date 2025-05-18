import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateWithoutSectionInput } from './section-product-create-without-section.input';
import { Type } from 'class-transformer';
import { SectionProductCreateOrConnectWithoutSectionInput } from './section-product-create-or-connect-without-section.input';
import { SectionProductCreateManySectionInputEnvelope } from './section-product-create-many-section-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';

@InputType()
export class SectionProductCreateNestedManyWithoutSectionInput {

    @Field(() => [SectionProductCreateWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductCreateWithoutSectionInput)
    create?: Array<SectionProductCreateWithoutSectionInput>;

    @Field(() => [SectionProductCreateOrConnectWithoutSectionInput], {nullable:true})
    @Type(() => SectionProductCreateOrConnectWithoutSectionInput)
    connectOrCreate?: Array<SectionProductCreateOrConnectWithoutSectionInput>;

    @Field(() => SectionProductCreateManySectionInputEnvelope, {nullable:true})
    @Type(() => SectionProductCreateManySectionInputEnvelope)
    createMany?: SectionProductCreateManySectionInputEnvelope;

    @Field(() => [SectionProductWhereUniqueInput], {nullable:true})
    @Type(() => SectionProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>>;
}
