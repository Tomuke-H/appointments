class Api::DoctorsController < ApplicationController
    before_action :set_doctor, only: [:show, :update, :destroy]

    def index
        render json: Doctor.all
    end

    def show
        render json: @doctor
    end

    def create
        @doctor = Doctor.new(doc_params)
        if(@doctor.save)
            render json: @doctor
        else
            render json: {errors: @doctor.errors}, status: 422
        end
    end
        
    def update
        if(@doctor.update(doc_params))
            render json: @doctor
        else
            render json: {errors: @doctor.errors}, status: 422
        end
    end

    def destroy 
        render json: @doctor.destory
    end

    private

    def doc_params
        params.require(:dcotor).permit(:name)
    end

    def set_doctor
        @doctor = Doctor.find(params[:id])
    end
end
