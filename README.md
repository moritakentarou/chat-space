# README

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
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
|e-mail|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users, through: :groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- belong_to:users_table, torough :groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|text||
|image|string||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
belongs_to :user
belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


