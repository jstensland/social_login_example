class EngageJanrainCallbackController < ApplicationController
  include Rpx
  skip_before_action :verify_authenticity_token, only: :engage, if: :json_request?

  def engage

    user_token = params[:token]
    api_caller = RpxHelper.new(Rails.application.secrets.janrain_api_key,
     'https://rpxnow.com', 'realmName')
    @profile = api_caller.auth_info(user_token)
  end

  def json_request?
    request.format.json?
  end

end
