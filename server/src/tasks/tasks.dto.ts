import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber,IsString, IsUUID, ValidateNested } from "class-validator";
 
export class queryTasksDto {
    @IsNotEmpty()
    @IsUUID()
    gr: string
}

class IUserTemplate  {
    @IsString()
    @IsUUID()
    readonly id: string
    @IsString()
    readonly name: string
}

export class createTaskDto {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNotEmpty()
    @IsString()
    description: string
    @IsNumber()
    number: number
    @Type(()=> IUserTemplate)
    @ValidateNested()
    @IsNotEmpty()
    createdUser: IUserTemplate
    @ValidateNested()
    @IsNotEmpty()
    assigned: IUserTemplate
    @IsNotEmpty()
    stage: Array<any>
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    startTask: Date
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    endTask: Date
    @IsUUID()
    grId: string
}