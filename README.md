# README

##messageテーブル
|Colum|Type|Option|
|-----|----|-------|
|content|string|
|image|string|
|group|references|foregin_key :true|
|user|references|foregin_key :true|
###Assosiation
-belongs_to :group
-belongs_to :user


###groupテーブル
|Colum|Type|Option|
|-----|----|-------|
|name|string|null: false, unique: true
###Assosiation
-has_many :group_users
-has_many :messages
-has_many :user


###group_userテーブル
|Colum|Type|Option|
|-----|----|-------|
|group|references|foregin_key :true|
|user|references|foregin_key :true|
###Assosiation
-belongs_to :group
-belongs_to :user

##userテーブル
|Colum|Type|Option|
|-----|----|-------|
|name|string|index, null false|
|string |email|string|null: false,|
###Assosiation
-has_many :group_users
-has_many :groups, through: :group_users
-has_many :messages


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
