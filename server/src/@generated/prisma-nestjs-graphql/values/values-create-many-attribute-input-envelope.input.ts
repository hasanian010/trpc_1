import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ValuesCreateManyAttributeInput } from './values-create-many-attribute.input';
import { Type } from 'class-transformer';

@InputType()
export class ValuesCreateManyAttributeInputEnvelope {

    @Field(() => [ValuesCreateManyAttributeInput], {nullable:false})
    @Type(() => ValuesCreateManyAttributeInput)
    data!: Array<ValuesCreateManyAttributeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
