import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerOrderByWithRelationInput } from './seller-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SellerScalarFieldEnum } from './seller-scalar-field.enum';

@ArgsType()
export class FindFirstSellerOrThrowArgs {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => [SellerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SellerOrderByWithRelationInput>;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SellerScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SellerScalarFieldEnum}`>;
}
