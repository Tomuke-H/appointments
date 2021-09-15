class Api::DoctorsController < ApplicationController

    def index
        render json: Doctor.all
    end

    def show
        render json: Doctor.find(params[:id])
    end

end
