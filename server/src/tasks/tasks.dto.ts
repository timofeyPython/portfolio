import { IsNotEmpty, IsUUID } from "class-validator";
 
export class queryTasksDto {
    @IsNotEmpty()
    @IsUUID()
    gr: string
}