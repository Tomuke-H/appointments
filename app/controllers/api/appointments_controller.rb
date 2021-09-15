class Api::AppointmentsController < ApplicationController

    before_action :set_appoint, only: [:show, :update, :destory]

    def index
        appointments = Appointment.clean_data
        render json: appointments
    end

    def show
        render json: @appoint
    end

    def create
        @appoint = Appointment.new(appoint_params)
        if(@appoint.save)
            render json: @appoint
        else
            render json: {errors: @appoint.errors}, status: 422
        end
    end

    def update
        if(@appoint.update(appoint_params))
            render json: @appoint
        else
            render json: {errors: @appoint.errors}, status: 422
        end
    end

    def destroy
        render json: @appoint.destroy
    end

    private

    def set_appoint
        @appoint = Appointment.find(params[:id])
    end

    def appoint_params
        params.require(:appointment).permit(:date, :doctor_id, :user_id)
    end

end
