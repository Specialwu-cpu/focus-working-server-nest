import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locations } from './entities/location.entities';
import { FpconnectController } from './fpconnect.controller';
import { FpconnectService } from './fpconnect.service';

@Module({
    imports: [TypeOrmModule.forFeature([Locations])],
    controllers: [FpconnectController],
    providers: [FpconnectService],
})
export class FpconnectModule { }
