import { RSSFeedController } from './../controllers/rss.controller';
import { Module } from "@nestjs/common";
import { RSSService } from "src/services/rss.services";


@Module({
    imports:[],
    providers:[RSSService],
    controllers:[RSSFeedController]
})

export class RSSModule {};