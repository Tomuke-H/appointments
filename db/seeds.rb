# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Appointment.destroy_all
Doctor.destroy_all
User.destroy_all

doctor1 = Doctor.create(name: Faker::Name.name)
doctor2 = Doctor.create(name: Faker::Name.name)
doctor3 = Doctor.create(name: Faker::Name.name)
doctor4 = Doctor.create(name: Faker::Name.name)
doctor5 = Doctor.create(name: Faker::Name.name)

doctors = [doctor1, doctor2, doctor3, doctor4, doctor5]

5.times do |i|
    user = User.create(name: Faker::Name.name)
    5.times do |i|
        Appointment.create(date: Faker::Date.forward(days: rand(200)), doctor_id: doctors[rand(4)].id, user_id:user.id)
    end
end

puts "Seeded #{Doctor.all.length} Doctors"
puts "Seeded #{User.all.length} Users"
puts "Seeded #{Appointment.all.length} Appointments"