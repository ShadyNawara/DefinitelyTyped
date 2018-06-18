import {Company} from "intercom-client";

export type UserIdentifier = { "id": string } | { "user_id": string } | { "email": string }

export interface Avatar {
    "type": "avatar",
    "image_url": string | null
}

export interface SocialProfile {
    "name": "Twitter",
    readonly "id": string,
    "username": "th1sland",
    "url": "http://twitter.com/th1sland"
}

export interface Segment {
    readonly "id": string
}

export interface Tag {
    readonly "id": string
}

interface LocationData {
    "type": "location_data",
    "city_name": string | null,
    "continent_code": string | null,
    "country_code": string | null,
    "country_name": string | null,
    "latitude": number | null,
    "longitude": number | null,
    "postal_code": string | null,
    "region_name": string | null,
    "timezone": string | null
}

export interface User {
    "type": "user" | "contact",
    readonly "id": string,
    "user_id": string | null,
    "email": string | null,
    "app_id"?: string,
    "phone": string | null,
    "name": string | null,
    readonly "updated_at": number,
    "last_seen_ip": string | null,
    "unsubscribed_from_emails": boolean,
    "last_request_at": number | null,
    "signed_up_at": number | null,
    readonly "created_at": number,
    "session_count": number,
    "user_agent_data": string | null,
    "pseudonym": string | null,
    "anonymous": boolean,
    "custom_attributes": {
        [key: string]: any
    },
    "avatar": Avatar,
    "location_data": LocationData | {},
    "social_profiles": {
        "type": "social_profile.list",
        "social_profiles": SocialProfile[]
    },
    "companies": {
        "type": "company.list",
        "companies": Company[]
    },
    "segments": {
        "type": "segment.list",
        "segments": Segment[]

    },
    "tags": {
        "type": "tag.list",
        "tags": Tag[]
    }
}

export interface List {
    "type": "user.list",
    "total_count": number,
    "users": User[],
    "pages": { "next"?: string, "page": number, "per_page": number, "total_pages": number }
}