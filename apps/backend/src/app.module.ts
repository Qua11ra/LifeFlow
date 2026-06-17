import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { DreamModule } from './dream/dream.module';
import { StepModule } from './step/step.module';
import { TaskModule } from './task/task.module';
import { NoteModule } from './note/note.module';

@Module({
    imports: [UserModule, DreamModule, StepModule, TaskModule, NoteModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
