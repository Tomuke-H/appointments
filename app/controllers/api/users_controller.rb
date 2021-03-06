class Api::UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :destroy]

    def index
        render json: User.all
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if(@user.save)
            render json: @user
        else
            render json: {errors: @user.errors}, status: 422
        end
    end
        
    def update
        if(@user.update(user_params))
            render json: @user
        else
            render json: {errors: @user.errors}, status: 422
        end
    end

    def destroy 
        render json: @user.destory
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

    def set_user
        @user = User.find(params[:id])
    end

end
