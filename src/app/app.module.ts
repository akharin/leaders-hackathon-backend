import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { LocationsModule } from '../locations/locations.module';
import { WorkShiftsModule } from '../work-shifts/work-shifts.module';
import { ObjectsModule } from '../objects/objects.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/leaders-hackathon', {
      useNewUrlParser: true,
      useFindAndModify: false,
    }),
    AuthModule,
    LocationsModule,
    WorkShiftsModule,
    ObjectsModule
  ]
})
export class AppModule {}
