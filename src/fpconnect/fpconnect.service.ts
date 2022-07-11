import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm'
import { Locations } from './entities/location.entities';


@Injectable()
export class FpconnectService {
    constructor(
        @InjectRepository(Locations)
        private readonly ldbRepository: Repository<Locations>
    ){ }

    createdb(body: any){
        const ldb = this.ldbRepository.create({
            fp1:body.fp1,
            fp2:body.fp2,
            fp3:body.fp3,
            fp4:body.fp4,
            x:body.x,
            y:body.y
        });
        return this.ldbRepository.save(ldb);
    }
    async getalocation(body:any){
        const lis1=await this.ldbRepository.find();
        var alist=[];
        for(var i=0;i<lis1.length;i++){
            alist.push({key: lis1[i].id,value: (lis1[i].fp1-body.fp1)**2+(lis1[i].fp2-body.fp2)**2+(lis1[i].fp3-body.fp3)**2+(lis1[i].fp4-body.fp4)**2});
        } 
        var anumber=alist[0].value;
        for(var i=0;i<lis1.length;i++){
            if(alist[i].value<anumber){
                anumber=alist[i].value;
            }
        }
        var numberList=[];
        for(var i=0;i<lis1.length;i++){
            if(alist[i].value<1.25*anumber){
                const alocation=await this.ldbRepository.findOne({
                    where:{
                        id:alist[i].key
                    }
                });
                numberList.push(alocation);
            }
        }
        var finalx=0;
        var finaly=0;
        for(var i=0;i<numberList.length;i++){
            finalx+=numberList[i].x;
            finaly+=numberList[i].y;
        }
        finalx=finalx/numberList.length;
        finaly=finaly/numberList.length;
        var finarry=[];
        finarry.push(finalx);
        finarry.push(finaly);
        return finarry;
    }
    async getAllLocation(){
        const lis1=await this.ldbRepository.find();
        return lis1;
    }
}
