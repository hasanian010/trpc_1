import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutReviewsInput } from './seller-create-without-reviews.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutReviewsInput } from './seller-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';

@InputType()
export class SellerCreateNestedOneWithoutReviewsInput {

    @Field(() => SellerCreateWithoutReviewsInput, {nullable:true})
    @Type(() => SellerCreateWithoutReviewsInput)
    create?: SellerCreateWithoutReviewsInput;

    @Field(() => SellerCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: SellerCreateOrConnectWithoutReviewsInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;
}
