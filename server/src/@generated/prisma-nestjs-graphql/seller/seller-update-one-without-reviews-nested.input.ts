import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerCreateWithoutReviewsInput } from './seller-create-without-reviews.input';
import { Type } from 'class-transformer';
import { SellerCreateOrConnectWithoutReviewsInput } from './seller-create-or-connect-without-reviews.input';
import { SellerUpsertWithoutReviewsInput } from './seller-upsert-without-reviews.input';
import { SellerWhereInput } from './seller-where.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { SellerUpdateToOneWithWhereWithoutReviewsInput } from './seller-update-to-one-with-where-without-reviews.input';

@InputType()
export class SellerUpdateOneWithoutReviewsNestedInput {

    @Field(() => SellerCreateWithoutReviewsInput, {nullable:true})
    @Type(() => SellerCreateWithoutReviewsInput)
    create?: SellerCreateWithoutReviewsInput;

    @Field(() => SellerCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => SellerCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: SellerCreateOrConnectWithoutReviewsInput;

    @Field(() => SellerUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => SellerUpsertWithoutReviewsInput)
    upsert?: SellerUpsertWithoutReviewsInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    disconnect?: SellerWhereInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    delete?: SellerWhereInput;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    @Type(() => SellerWhereUniqueInput)
    connect?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => SellerUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => SellerUpdateToOneWithWhereWithoutReviewsInput)
    update?: SellerUpdateToOneWithWhereWithoutReviewsInput;
}
