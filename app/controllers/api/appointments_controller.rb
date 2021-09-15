class Api::AppointmentsController < ApplicationController

    def index
        appointments = Appointment.clean_data
        render json: appointments
    end

end
