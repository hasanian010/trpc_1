import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashWhereInput } from './flash-where.input';
import { Type } from 'class-transformer';
import { FlashOrderByWithRelationInput } from './flash-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FlashWhereUniqueInput } from './flash-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlashScalarFieldEnum } from './flash-scalar-field.enum';

@ArgsType()
export class FindFirstFlashOrThrowArgs {

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;

    @Field(() => [FlashOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FlashOrderByWithRelationInput>;

    @Field(() => FlashWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FlashWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FlashScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FlashScalarFieldEnum}`>;
}
