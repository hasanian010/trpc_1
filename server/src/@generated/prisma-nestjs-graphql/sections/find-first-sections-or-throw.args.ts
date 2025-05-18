import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsWhereInput } from './sections-where.input';
import { Type } from 'class-transformer';
import { SectionsOrderByWithRelationInput } from './sections-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SectionsScalarFieldEnum } from './sections-scalar-field.enum';

@ArgsType()
export class FindFirstSectionsOrThrowArgs {

    @Field(() => SectionsWhereInput, {nullable:true})
    @Type(() => SectionsWhereInput)
    where?: SectionsWhereInput;

    @Field(() => [SectionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SectionsOrderByWithRelationInput>;

    @Field(() => SectionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SectionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SectionsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SectionsScalarFieldEnum}`>;
}
