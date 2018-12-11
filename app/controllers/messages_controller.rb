class MessagesController < ApplicationController
	def index
		@test = Test.find(1)
		
	end
end
