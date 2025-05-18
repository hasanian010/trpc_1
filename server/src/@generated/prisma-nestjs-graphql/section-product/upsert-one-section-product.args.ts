import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SectionProductWhereUniqueInput } from './section-product-where-unique.input';
import { Type } from 'class-transformer';
import { SectionProductCreateInput } from './section-product-create.input';
import { SectionProductUpdateInput } from './section-product-update.input';

@ArgsType()
export class UpsertOneSectionProductArgs {

    @Field(() => SectionProductWhereUniqueInput, {nullable:false})
    @Type(() => SectionProductWhereUniqueInput)
    where!: Prisma.AtLeast<SectionProductWhereUniqueInput, 'id'>;

    @Field(() => SectionProductCreateInput, {nullable:false})
    @Type(() => SectionProductCreateInput)
    create!: SectionProductCreateInput;

    @Field(() => SectionProductUpdateInput, {nullable:false})
    @Type(() => SectionProductUpdateInput)
    update!: SectionProductUpdateInput;
}
