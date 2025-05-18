import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductSpecificationCreateManyProductInput } from './product-specification-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductSpecificationCreateManyProductInputEnvelope {

    @Field(() => [ProductSpecificationCreateManyProductInput], {nullable:false})
    @Type(() => ProductSpecificationCreateManyProductInput)
    data!: Array<ProductSpecificationCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
