import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateMyrlDto } from './dto/myrl.dto';
import { MyrlInterface } from './interfaces/myrl.interface';
import * as shortid from 'shortid';
import { isNull } from 'util';

@Injectable()
export class MyrlService {
  constructor(@InjectModel('Myrl') private myrlModel: Model<MyrlInterface>) {}

  async findOne(urlCode: string): Promise<string> {
    const res = await this.myrlModel.findOne({ urlCode: urlCode }).then(url => {
      if (url) {
        return url.oldUrl;
      } else return 'requested url not found';
    });
    return res;
  }

  async modify(data: CreateMyrlDto): Promise<string> {
    if (data.customText.length) {
      const obj: boolean = await this.myrlModel
        .findOne({ urlCode: data.customText })
        .then(res => {
          if (res) return true;
          else return false;
        });

      if (obj) {
        return 'Custom text is already in use try something else';
      } else {
        const url = await this.myrlModel
          .findOne({ oldUrl: data.oldUrl })
          .then(async res => {
            if (res) return res.newUrl;
            else {
              const nrl = new this.myrlModel({
                urlCode: data.customText,
                oldUrl: data.oldUrl,
                newUrl: `https://my-rl.herokuapp.com/${data.customText}`,
              });
              const mrl = await nrl.save().then(res => {
                return res.newUrl;
              });
              return mrl;
            }
          });
        return url;
      }
    } else {
      const url = await this.myrlModel
        .findOne({ oldUrl: data.oldUrl })
        .then(res => {
          if (res) return res.newUrl;
          else return null;
        });
      if (isNull(url)) {
        const urlCode = shortid.generate();
        const nrl = new this.myrlModel({
          urlCode: urlCode,
          oldUrl: data.oldUrl,
          newUrl: `https://my-rl.herokuapp.com/${urlCode}`,
        });
        const mrl = await nrl.save().then(res => {
          return res.newUrl;
        });
        return mrl;
      } else {
        return url;
      }
    }
  }
}

/*let obj = null;
     return obj;
    this.myrlModel.findOne({ oldUrl: data.oldUrl }).then(res => {
      if (res) {
        console.log(res);
        obj = res.newUrl;
        console.log(obj);
      }
    });
    console.log('at url already in database case');
    if (obj != null) {
      console.log('return 1');
      console.log(obj);
      return obj;
    }
    if (data.customText) {
      obj = this.myrlModel.findOne({ urlCode: data.customText }).then(res => {
        if (res) return 'custom text already taken try something new';
        else {
          const url = new this.myrlModel({
            urlCode: data.customText,
            oldUrl: data.oldUrl,
            newUrl: String(`https://my-rl.herokuapp.com/${data.customText}`),
          });
          url.save().then(res => {
            return res.newUrl;
          });
        }
      });
    }
    console.log('at custom text checking');
    if (obj != null) {
      console.log('return 2');
      return obj;
    }

    const urlCode = shortid.generate();
    const url = new this.myrlModel({
      urlCode: urlCode,
      oldUrl: data.oldUrl,
      newUrl: String(`https://my-rl.herokuapp.com/${urlCode}`),
    });
    obj = url.save().then(res => {
      return res.newUrl;
    });
    console.log('at new entry in db');
    console.log('return 3');
   */
