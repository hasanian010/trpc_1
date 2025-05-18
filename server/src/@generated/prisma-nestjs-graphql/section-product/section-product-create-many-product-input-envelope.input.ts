import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionProductCreateManyProductInput } from './section-product-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class SectionProductCreateManyProductInputEnvelope {

    @Field(() => [SectionProductCreateManyProductInput], {nullable:false})
    @Type(() => SectionProductCreateManyProductInput)
    data!: Array<SectionProductCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
