class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  def self.clean_data
    appointments = Appointment.all
    appointments.map do |a|
      {id: a.id, date: a.date, doctor: a.doctor, user: a.user}
    end

  end
end
