class EngageJanrainCallbackController < ApplicationController
  include Rpx

  def engage
    user_token = params[:token]
    api_caller = RpxHelper.new(Rails.application.secrets.janrain_api_key,
     'https://rpxnow.com', 'realmName')
    @profile = api_caller.auth_info(user_token)
  end

end
