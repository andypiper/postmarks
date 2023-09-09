import express from "express";
import {instanceType, instanceVersion} from "../../util.js";

export const router = express.Router();

router.get("/", async function (req, res) {
  let domain = req.app.get("domain");
  
  if (req.originalUrl == "/.well-known/nodeinfo") {
    let thisNode = {
      links: [
        {
          rel: "http://nodeinfo.diaspora.software/ns/schema/2.0",
          href: `https://${domain}/nodeinfo/2.0`,
        },
      ],
    };
    res.json(thisNode);
  }

  if (req.originalUrl == "/nodeinfo/2.0") {
    
    const bookmarksDb = req.app.get("bookmarksDb");
    let bookmarkcount = await bookmarksDb.getBookmarkCount();
    
    let nodeInfo = {
      version: 2.0,
      software: {
        name: instanceType,
        version: instanceVersion,
      },
      protocols: [
        "activitypub"
      ],
      services: {
        outbound: [],
        inbound: []
      },
      usage: {
        users: {
          total: 1,
          activeMonth: 1,
          activeHalfyear: 1
        },
        localPosts: bookmarkcount,
      },
      openRegistrations: false,
      metadata: {}
    };
    // activeMonth and activeHalfyear should be dynamic, currently static
    res.json(nodeInfo);
  }
});
