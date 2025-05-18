import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyMainCategoryInput } from './product-create-many-main-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyMainCategoryInputEnvelope {

    @Field(() => [ProductCreateManyMainCategoryInput], {nullable:false})
    @Type(() => ProductCreateManyMainCategoryInput)
    data!: Array<ProductCreateManyMainCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
