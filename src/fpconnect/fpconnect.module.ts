import { Module, forwardRef} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { AllLocalEntity } from './entities/all-local.entity';
import { Locations } from './entities/location.entities';
import { FpconnectController } from './fpconnect.controller';
import { FpconnectService } from './fpconnect.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Locations]),
    TypeOrmModule.forFeature([AllLocalEntity]),
    forwardRef(()=>UsersModule)          
  ],
  controllers: [FpconnectController],
  providers: [FpconnectService],
})
export class FpconnectModule { }
