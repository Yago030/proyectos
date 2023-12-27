import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema({
    timestamps:true /*crea una createdAt y updateAt, es decir que nos mantiene un resitro de cunado fue creado y actualizado  */
})
export class Task { /*creamos la db */
  @Prop({ 
    unique : true,
    required: true,
    trim: true } )

  title: string;

  @Prop({
    trim :true
    } )
  description: string;

  @Prop({
    default:false
  })
  done: boolean;
}

 export  const TaskSchema = SchemaFactory.createForClass(Task)


