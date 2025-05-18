import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSpecificationsInput } from './product-update-without-specifications.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutSpecificationsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutSpecificationsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSpecificationsInput)
    data!: ProductUpdateWithoutSpecificationsInput;
}
