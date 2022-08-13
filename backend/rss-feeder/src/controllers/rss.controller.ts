import { RSSService } from './../services/rss.services';
import { Body, Controller, Delete, Get, Query, Post } from "@nestjs/common";

@Controller("rss")
export class RSSFeedController{
    constructor(private readonly rssService : RSSService){}
    // subscribe to rss
    // unsubscribe from rss
    // display rss subscriptions
    // display rss data in sorted order
    @Post("subscribe")
    subscribeFeed(@Body('id') userId : string, @Body('feedName') feedName : string, @Body('feedUrl') feedUrl : string){
        return this.rssService.subscribeToFeed(userId,feedUrl,feedName);
    }

    @Get("getSubscriptionFeeds")
    getSubscriptionFeeds(@Query('id') userId: string){
        console.log(userId);
        return this.rssService.getSubscriptionFeeds(userId);
    }

    @Delete("unsubscribe")
    unsubscribe(@Query('id') userId : string, @Query('feedId') feedId : number){
        return this.rssService.unsubscribeFromFeed(userId,feedId);
    }

    @Get("fetch")
    getFeeds(@Query('id') userId : string){
        return this.rssService.feedsForUser(userId);
    }
}