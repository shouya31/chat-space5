json.array! @new_messages.each do |message|
  json.name message.user.name	    json.id message.id
  json.date message.created_at	    json.content message.content
  json.content message.content	    json.name message.user.name
  json.image message.image	    json.date message.created_at
  json.id message.id	    json.image message.image
  