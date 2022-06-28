/// <reference types="node" />
import { session_id, IChangedProfilePicture } from './types';
import { IGUserMetadata, UserGraphQL } from './types/UserMetadata';
import { IGStoriesMetadata } from './types/StoriesMetadata';
import { IHighlightsMetadata } from './types/HighlightMediaMetadata';
import { IPostModels } from './types/PostModels';
import { PostFeedResult } from './types/PostFeedResult';
import { PostStoryResult } from './types/PostStoryResult';
import { MediaConfigureOptions } from './types/MediaConfigureOptions';
import { GraphqlUser } from './types/UserGraphQlV2';
import { IPaginatedPosts } from './types/PaginatedPosts';
export * from './utils';
export * as InstagramMetadata from './types';
export * from './helper/Session';
export declare class igApi {
    private session_id;
    storeCookie: boolean;
    /**
     * Recommended to set session id for most all IG Request
     * @param session_id session id you can get it by using getSessionId function, see README.md or example file
     * @param storeCookie
     */
    constructor(session_id?: session_id, storeCookie?: boolean);
    private cookie;
    private buildHeaders;
    /**
     * Make request to IG API
     * @param baseURL
     * @param url
     * @param agent
     * @param options
     */
    private FetchIGAPI;
    /**
     * Set session id for most all IG Request
     * @param {session_id} session_id
     */
    private setCookie;
    /**
     * get user id by username
     * @param {username} username
     * @returns
     */
    getIdByUsername: (username: string) => Promise<string>;
    private _formatSidecar;
    fetchPost: (url: string) => Promise<IPostModels>;
    /**
     * fetch client account profile
     */
    accountInfo: (userID?: number | string) => Promise<UserGraphQL>;
    /**
     * fetch profile by username. including email, phone number
     * @param {String} username
     * @returns {Promise<IGUserMetadata>}
     */
    fetchUser: (username: string) => Promise<IGUserMetadata>;
    fetchUserV2: (username: string) => Promise<GraphqlUser>;
    /**
     * simple method to check is user follow me
     * @param username
     * @returns true if user is follow me
     */
    isFollowMe: (username: string) => Promise<boolean>;
    /**
     *
     * @param {StoriesGraphQL} metadata
     * @returns {ItemStories[]}
     */
    private _parseStories;
    /**
     * fetches stories metadata
     * @param {string} username username target to fetch the stories, also work with private profile if you use session id \w your account that follows target account
     * @returns
     */
    fetchStories: (username: string) => Promise<IGStoriesMetadata>;
    /**
     * Fetch all reels/highlight id
     * @param {username} username
     * @returns
     */
    private _getReelsIds;
    /**
     * get media urls from highlight id
     * @param {ids} id of highlight
     * @returns
     */
    private _getReels;
    /**
     * fetches highlight metadata (REQUIRES SESSION ID)
     * @param {string} username username target to fetch the highlights, also work with private profile if you use session id \w your account that follows target account
     * @returns
     */
    fetchHighlights: (username: string) => Promise<IHighlightsMetadata>;
    /**
     * fetches user posts, with pagination
     * @param username
     * @param end_cursor get end_cursor by fetch user posts first
     * @returns
     */
    fetchUserPosts: (username: string, end_cursor?: string) => Promise<IPaginatedPosts>;
    private uploadPhoto;
    /**
     * Post a photo to instagram
     * @param photo file path or Buffer
     * @param type post type
     * @param options
     * @returns
     */
    addPost: (photo: string | Buffer, type: "feed" | "story" | undefined, options: MediaConfigureOptions) => Promise<PostFeedResult | PostStoryResult>;
    /**
     *
     * @param photo input must be filepath or buffer
     */
    changeProfilePicture: (photo: string | Buffer) => Promise<IChangedProfilePicture>;
}
