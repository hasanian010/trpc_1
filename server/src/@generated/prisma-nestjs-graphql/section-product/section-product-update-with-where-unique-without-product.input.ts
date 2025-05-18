import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { Type } from 'class-transformer';
import { SectionProductUpdateWithoutProductInput } from './section-product-update-without-product.input';

@InputType()
export class SectionProductUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => SectionProductWhereUniqueInput, {nullable:false})
    @Type(() => SectionProductWhereUniqueInput)
    where!: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;

    @Field(() => SectionProductUpdateWithoutProductInput, {nullable:false})
    @Type(() => SectionProductUpdateWithoutProductInput)
    data!: SectionProductUpdateWithoutProductInput;
}
