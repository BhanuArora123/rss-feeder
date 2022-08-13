import { jsonToXML } from './../utils/utilFunc';
import { Injectable, NotFoundException } from "@nestjs/common"
import { rssFeed } from "src/models/rss.models"
import { isJSON } from "src/utils/utilFunc";
import axios from "axios";
@Injectable()
export class RSSService {
    async subscribeToFeed(userId,feedUrl,feedName) {
        await rssFeed.create({
            userId,
            feedUrl,
            feedName
        });
        return {
            message : "successfully subscribed"
        }
    }
    async unsubscribeFromFeed(userId,feedId){
        let feedData = await rssFeed.findOne({
            where : {
                feedId,
                userId
            }
        });
        if(!feedData){
            return new NotFoundException("feed data not found");
        }
        await feedData.destroy();
        return {
            message : "unsubscribed successfully"
        }
    }
    async getSubscriptionFeeds(userId){
        let feedData = await rssFeed.findAll({
            where : {
                userId:userId
            }
        });
        if(!feedData){
            return new NotFoundException("feed data not found");
        }
        return {
            feedData,
            message : "fetched successfully"
        }
    }
    async feedsForUser(userId){
        let allFeedForUser = await rssFeed.findAll({
            where:{
                userId:userId
            }
        });
        let allFeeds = [];
        for(let ind : number = 0 ;ind < allFeedForUser.length;ind++){
            let data = allFeedForUser[ind];
            let feeds = await axios({
                url:data.feedUrl,
                method:"GET"
            });
            // console.log(feeds.data);
            let jsonData : any = feeds;
            if(!isJSON(data)){
                jsonData = jsonToXML(feeds.data);
            }
            console.log(jsonData);
            allFeeds.push({
                name:data.feedName,
                items:jsonData?.rss?.channel?.item
            })
        }
        return {
            allFeeds,
            message :"feeds fetched successfully"
        };
    }
}