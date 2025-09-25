
https://developers.pinterest.com/docs/api/v5/boards-list

Get a list of the boards owned by the "operation user_account" + group boards where this account is a collaborator

Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
Optional: Specify a privacy type (public, protected, or secret) to indicate which boards to return.
If no privacy is specified, all boards that can be returned (based on the scopes of the token and ad_account role if applicable) will be returned.


(async() => {
    const result = await fetch('https://api.pinterest.com/v5/boards', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer <access_token>',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    console.log(await result.json());
})();
        

curl --location --request GET 'https://api.pinterest.com/v5/boards' \
--header 'Authorization: Bearer <Add your token here>' \
--header 'Content-Type: application/json'

---

Query Parameters
Payload information
ad_account_id
string
<= 18 characters
^\d+$
Unique identifier of an ad account.
bookmark
string
Cursor used to fetch the next page of items
page_size
integer
[1 ... 250]
Default:
25
Maximum number of items to include in a single page of the response. See documentation on Pagination for more information.
privacy
string
Privacy setting for a board.
Enum:
"ALL"
"PROTECTED"
"PUBLIC"
"SECRET"
"PUBLIC_AND_SECRET"
Responses
200:
response
default:
Unexpected error


Response sample

{
      "items": [
            {
                  "id": "549755885175",
                  "created_at": "2020-01-01T20:10:40-00:00",
                  "board_pins_modified_at": "2020-01-01T20:10:40-00:00",
                  "name": "Summer Recipes",
                  "description": "My favorite summer recipes",
                  "collaborator_count": 17,
                  "pin_count": 5,
                  "follower_count": 13,
                  "media": {
                        "image_cover_url": "https://i.pinimg.com/400x300/fd/cd/d5/fdcdd5a6d8a80824add0d054125cd957.jpg",
                        "pin_thumbnail_urls": [
                              "https://i.pinimg.com/150x150/b4/57/10/b45710f1ede96af55230f4b43935c4af.jpg",
                              "https://i.pinimg.com/150x150/dd/ff/46/ddff4616e39c1935cd05738794fa860e.jpg",
                              "https://i.pinimg.com/150x150/84/ac/59/84ac59b670ccb5b903dace480a98930c.jpg",
                              "https://i.pinimg.com/150x150/4c/54/6f/4c546f521be85e30838fb742bfff6936.jpg"
                        ]
                  },
                  "owner": {
                        "username": "string"
                  },
                  "privacy": "PUBLIC",
                  "is_ads_only": true
            }
      ],
      "bookmark": "string"
}


---


http://developers.pinterest.com/docs/api/v5/boards-get
https://api.pinterest.com/v5/boards/{board_id}

Get a board owned by the operation user_account - or a group board that has been shared with this account.
Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
By default, the "operation user_account" is the token user_account.
Ratelimit category:
org_read
Sandbox support:
enabled
Authorizations
Pinterest OAuth 2.0
Scopes: 
boards:read
Client Credentials
Scopes: 
boards:read
Path Parameters
Payload information
board_id
required
string^\d+$
Unique identifier of a board.
Query Parameters
Payload information
ad_account_id
string
<= 18 characters
^\d+$
Unique identifier of an ad account.
Responses
200:
response
404:
Board not found.
default:
Unexpected error


# Board information can be fetched from profile page or from create/list board method here:
# /docs/api/v5/#operation/boards/list

curl --location --request GET 'https://api.pinterest.com/v5/boards/<insert_your_board_id>' \
--header 'Authorization: Bearer <Add your token here>' \
--header 'Content-Type: application/json'


Response sample

{
      "id": "549755885175",
      "created_at": "2020-01-01T20:10:40-00:00",
      "board_pins_modified_at": "2020-01-01T20:10:40-00:00",
      "name": "Summer Recipes",
      "description": "My favorite summer recipes",
      "collaborator_count": 17,
      "pin_count": 5,
      "follower_count": 13,
      "media": {
            "image_cover_url": "https://i.pinimg.com/400x300/fd/cd/d5/fdcdd5a6d8a80824add0d054125cd957.jpg",
            "pin_thumbnail_urls": [
                  "https://i.pinimg.com/150x150/b4/57/10/b45710f1ede96af55230f4b43935c4af.jpg",
                  "https://i.pinimg.com/150x150/dd/ff/46/ddff4616e39c1935cd05738794fa860e.jpg",
                  "https://i.pinimg.com/150x150/84/ac/59/84ac59b670ccb5b903dace480a98930c.jpg",
                  "https://i.pinimg.com/150x150/4c/54/6f/4c546f521be85e30838fb742bfff6936.jpg"
            ]
      },
      "owner": {
            "username": "string"
      },
      "privacy": "PUBLIC",
      "is_ads_only": true
}

----


https://api.pinterest.com/v5/boards/{board_id}/sections
Get a list of all board sections from a board owned by the "operation user_account" - or a group board that has been shared with this account.
Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
By default, the "operation user_account" is the token user_account.

Query Parameters
Payload information
ad_account_id
string
<= 18 characters
^\d+$
Unique identifier of an ad account.
bookmark
string
Cursor used to fetch the next page of items
page_size
integer
[1 ... 250]
Default:
25
Maximum number of items to include in a single page of the response. See documentation on Pagination for more information.


(async() => {
    const result = await fetch('https://api.pinterest.com/v5/boards/{board_id}/sections?board_id={board_id}', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer <access_token>',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    console.log(await result.json());
})();
        

Response sample
{
      "items": [
            {
                  "id": "549755885175",
                  "name": "Salads"
            }
      ],
      "bookmark": "string"
}

----


https://api.pinterest.com/v5/boards/{board_id}/sections/{section_id}/pins
Get a list of all pins in a section from a board

Get a list of the Pins on a board section of a board owned by the "operation user_account" - or on a group board that has been shared with this account.
Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
By default, the "operation user_account" is the token user_account.

Path Parameters
Payload information
board_id
required
string^\d+$
Unique identifier of a board.
section_id
required
string^\d+$
Unique identifier of a board section.
Query Parameters
Payload information
ad_account_id
string
<= 18 characters
^\d+$
Unique identifier of an ad account.
bookmark
string
Cursor used to fetch the next page of items
page_size
integer
[1 ... 250]
Default:
25
Maximum number of items to include in a single page of the response. See documentation on Pagination for more information.


(async() => {
    const result = await fetch('https://api.pinterest.com/v5/boards/{board_id}/sections/{section_id}/pins?board_id={board_id}&section_id={section_id}', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer <access_token>',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    console.log(await result.json());
})();
        

Response sample
{
      "items": [
            {
                  "alt_text": "string",
                  "board_id": "string",
                  "board_owner": {
                        "username": "string"
                  },
                  "board_section_id": "string",
                  "created_at": "string",
                  "creative_type": "string",
                  "description": "string",
                  "dominant_color": "string",
                  "has_been_promoted": "false",
                  "id": "string",
                  "is_owner": "false",
                  "is_standard": "false",
                  "link": "string",
                  "media": {
                        "media_type": "string",
                        "images": {
                              "150x150": {
                                    "width": 150,
                                    "height": 150,
                                    "url": "https://i.pinimg.com/150x150/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              },
                              "400x300": {
                                    "width": 400,
                                    "height": 300,
                                    "url": "https://i.pinimg.com/400x300/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              },
                              "600x": {
                                    "width": 600,
                                    "height": 600,
                                    "url": "https://i.pinimg.com/600x/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              },
                              "1200x": {
                                    "width": 1200,
                                    "height": 1200,
                                    "url": "https://i.pinimg.com/1200x/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              }
                        }
                  },
                  "note": "string",
                  "parent_pin_id": "string",
                  "pin_metrics": {
                        "90d": {
                              "pin_click": 7,
                              "impression": 2,
                              "clickthrough": 3
                        },
                        "lifetime_metrics": {
                              "pin_click": 7,
                              "impression": 2,
                              "clickthrough": 3,
                              "reaction": 10,
                              "comment": 2
                        }
                  },
                  "title": "string"
            }
      ],
      "bookmark": "string"
}

---


https://api.pinterest.com/v5/pins/{pin_id}

Get a Pin owned by the "operation user_account" - or on a group board that has been shared with this account.
By default, the "operation user_account" is the token user_account.
Optional: Business Access: Specify an ad_account_id (obtained via List ad accounts) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following Business Access roles on the ad_account:
For Pins on public or protected boards: Owner, Admin, Analyst, Campaign Manager.
For Pins on secret boards: Owner, Admin.

Path Parameters
Payload information
pin_id
required
string^\d+$
Query Parameters
Payload information
ad_account_id
string
<= 18 characters
^\d+$
Unique identifier of an ad account.
pin_metrics
boolean
Default:
false



(async() => {
    const result = await fetch('https://api.pinterest.com/v5/pins/{pin_id}?pin_id={pin_id}', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer <access_token>',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    console.log(await result.json());
})();
        

response sample

{
      "alt_text": "string",
      "board_id": "string",
      "board_owner": {
            "username": "string"
      },
      "board_section_id": "string",
      "created_at": "string",
      "creative_type": "string",
      "description": "string",
      "dominant_color": "string",
      "has_been_promoted": "false",
      "id": "string",
      "is_owner": "false",
      "is_standard": "false",
      "link": "string",
      "media": {
            "media_type": "string",
            "images": {
                  "150x150": {
                        "width": 150,
                        "height": 150,
                        "url": "https://i.pinimg.com/150x150/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                  },
                  "400x300": {
                        "width": 400,
                        "height": 300,
                        "url": "https://i.pinimg.com/400x300/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                  },
                  "600x": {
                        "width": 600,
                        "height": 600,
                        "url": "https://i.pinimg.com/600x/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                  },
                  "1200x": {
                        "width": 1200,
                        "height": 1200,
                        "url": "https://i.pinimg.com/1200x/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                  }
            }
      },
      "note": "string",
      "parent_pin_id": "string",
      "pin_metrics": {
            "90d": {
                  "pin_click": 7,
                  "impression": 2,
                  "clickthrough": 3
            },
            "lifetime_metrics": {
                  "pin_click": 7,
                  "impression": 2,
                  "clickthrough": 3,
                  "reaction": 10,
                  "comment": 2
            }
      },
      "title": "string"
}

---

https://api.pinterest.com/v5/boards/{board_id}/pins
https://developers.pinterest.com/docs/api/v5/boards-list_pins/

Get a list of the Pins on a board owned by the "operation user_account" - or on a group board that has been shared with this account.
Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
By default, the "operation user_account" is the token user_account.

Path Parameters
Payload information
board_id
required
string^\d+$
Unique identifier of a board.
Query Parameters
Payload information
bookmark
string
Cursor used to fetch the next page of items
page_size
integer
[1 ... 250]
Default:
25
Maximum number of items to include in a single page of the response. See documentation on Pagination for more information.
creative_types

Array of strings
Pin creative types filter.
Note: SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.
ad_account_id
string
<= 18 characters
^\d+$
Unique identifier of an ad account.
pin_metrics
boolean
Default:
false
Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before 2023-03-20 lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.



(async() => {
    const result = await fetch('https://api.pinterest.com/v5/boards/{board_id}/pins?board_id={board_id}', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer <access_token>',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    console.log(await result.json());
})();
        

response sample
{
      "items": [
            {
                  "alt_text": "string",
                  "board_id": "string",
                  "board_owner": {
                        "username": "string"
                  },
                  "board_section_id": "string",
                  "created_at": "string",
                  "creative_type": "string",
                  "description": "string",
                  "dominant_color": "string",
                  "has_been_promoted": "false",
                  "id": "string",
                  "is_owner": "false",
                  "is_standard": "false",
                  "link": "string",
                  "media": {
                        "media_type": "string",
                        "images": {
                              "150x150": {
                                    "width": 150,
                                    "height": 150,
                                    "url": "https://i.pinimg.com/150x150/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              },
                              "400x300": {
                                    "width": 400,
                                    "height": 300,
                                    "url": "https://i.pinimg.com/400x300/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              },
                              "600x": {
                                    "width": 600,
                                    "height": 600,
                                    "url": "https://i.pinimg.com/600x/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              },
                              "1200x": {
                                    "width": 1200,
                                    "height": 1200,
                                    "url": "https://i.pinimg.com/1200x/0d/f6/f1/0df6f1f0bfe7aaca849c1bbc3607a34b.jpg"
                              }
                        }
                  },
                  "note": "string",
                  "parent_pin_id": "string",
                  "pin_metrics": {
                        "90d": {
                              "pin_click": 7,
                              "impression": 2,
                              "clickthrough": 3
                        },
                        "lifetime_metrics": {
                              "pin_click": 7,
                              "impression": 2,
                              "clickthrough": 3,
                              "reaction": 10,
                              "comment": 2
                        }
                  },
                  "title": "string"
            }
      ],
      "bookmark": "string"
}

---