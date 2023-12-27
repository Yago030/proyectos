
import { IsBoolean, IsNotEmpty, IsString , IsOptional} from "class-validator";

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?:string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    description:string;

    @IsOptional()
    @IsBoolean()
    done?:boolean;
}