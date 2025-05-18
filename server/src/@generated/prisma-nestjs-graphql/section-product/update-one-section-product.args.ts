import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductUpdateInput } from './section-product-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';

@ArgsType()
export class UpdateOneSectionProductArgs {

    @Field(() => SectionProductUpdateInput, {nullable:false})
    @Type(() => SectionProductUpdateInput)
    data!: SectionProductUpdateInput;

    @Field(() => SectionProductWhereUniqueInput, {nullable:false})
    @Type(() => SectionProductWhereUniqueInput)
    where!: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;
}
