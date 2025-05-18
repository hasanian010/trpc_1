import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutSpecificationsInput } from './product-update-without-specifications.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSpecificationsInput } from './product-create-without-specifications.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutSpecificationsInput {

    @Field(() => ProductUpdateWithoutSpecificationsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSpecificationsInput)
    update!: ProductUpdateWithoutSpecificationsInput;

    @Field(() => ProductCreateWithoutSpecificationsInput, {nullable:false})
    @Type(() => ProductCreateWithoutSpecificationsInput)
    create!: ProductCreateWithoutSpecificationsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
