import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { Type } from 'class-transformer';
import { SectionProductCreateWithoutProductInput } from './section-product-create-without-product.input';

@InputType()
export class SectionProductCreateOrConnectWithoutProductInput {

    @Field(() => SectionProductWhereUniqueInput, {nullable:false})
    @Type(() => SectionProductWhereUniqueInput)
    where!: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;

    @Field(() => SectionProductCreateWithoutProductInput, {nullable:false})
    @Type(() => SectionProductCreateWithoutProductInput)
    create!: SectionProductCreateWithoutProductInput;
}
