import { Video, VideoDocument } from './schema/video.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name) private videoModule: Model<VideoDocument>,
  ) {}

  async create(createVideoDto: CreateVideoDto) {
    const videoCreated = await this.videoModule.create(createVideoDto);
    return videoCreated;
  }

  async findAll() {
    return await this.videoModule.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
