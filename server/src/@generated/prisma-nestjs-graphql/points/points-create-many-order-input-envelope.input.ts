import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PointsCreateManyOrderInput } from './points-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class PointsCreateManyOrderInputEnvelope {

    @Field(() => [PointsCreateManyOrderInput], {nullable:false})
    @Type(() => PointsCreateManyOrderInput)
    data!: Array<PointsCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
