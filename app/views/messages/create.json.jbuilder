json.name @message.user.name
json.content @message.content
json.image @message.image
json.group_id @message.group_id
json.user_id @message.user_id
json.time.strftime("%Y年%-m月%-d日 %-H時%-M分%-S秒") @message.created_at
