import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyFlashInput } from './product-create-many-flash.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyFlashInputEnvelope {

    @Field(() => [ProductCreateManyFlashInput], {nullable:false})
    @Type(() => ProductCreateManyFlashInput)
    data!: Array<ProductCreateManyFlashInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
