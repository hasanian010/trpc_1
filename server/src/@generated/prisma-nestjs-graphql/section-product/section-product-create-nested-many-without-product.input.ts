import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateWithoutProductInput } from './section-product-create-without-product.input';
import { Type } from 'class-transformer';
import { SectionProductCreateOrConnectWithoutProductInput } from './section-product-create-or-connect-without-product.input';
import { SectionProductCreateManyProductInputEnvelope } from './section-product-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';

@InputType()
export class SectionProductCreateNestedManyWithoutProductInput {

    @Field(() => [SectionProductCreateWithoutProductInput], {nullable:true})
    @Type(() => SectionProductCreateWithoutProductInput)
    create?: Array<SectionProductCreateWithoutProductInput>;

    @Field(() => [SectionProductCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => SectionProductCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<SectionProductCreateOrConnectWithoutProductInput>;

    @Field(() => SectionProductCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => SectionProductCreateManyProductInputEnvelope)
    createMany?: SectionProductCreateManyProductInputEnvelope;

    @Field(() => [SectionProductWhereUniqueInput], {nullable:true})
    @Type(() => SectionProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>>;
}
